using Autofac;
using Autofac.Integration.Mvc;
using Autofac.Integration.SignalR;
using Autofac.Integration.WebApi;
using AutoMapper;
using Com.ChatR.Core;
using Com.ChatR.MsSqlProvider;
using Com.ChatR.Repository;
using Microsoft.AspNet.SignalR;
using Newtonsoft.Json.Serialization;
using Owin;
using System;
using System.Linq;
using System.Net.Http.Formatting;
using System.Reflection;
using System.Web.Http;
using System.Web.Mvc;

namespace Com.ChatR.Web
{
    public partial class Startup
    {
        public static void ConfigureContainer(IAppBuilder app)
        {
            var container = CreateContainer();

            //Autofac MVC registration
            DependencyResolver.SetResolver(new Autofac.Integration.Mvc.AutofacDependencyResolver(container));
            app.UseAutofacMiddleware(container);
            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);
            app.UseAutofacMvc();

            //Autofac WebApi2 registration
            HttpConfiguration config = new HttpConfiguration();
            config.MapHttpAttributeRoutes();
            config.DependencyResolver = new AutofacWebApiDependencyResolver(container);

            var jsonFormatter = config.Formatters.OfType<JsonMediaTypeFormatter>().First();
            jsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            app.UseAutofacWebApi(config);
            app.UseWebApi(config);

            // Set the dependency resolver to be Autofac. for Signalr
            GlobalHost.DependencyResolver = new Autofac.Integration.SignalR.AutofacDependencyResolver(container);
        }

        private static IContainer CreateContainer()
        {
            ContainerBuilder builder = new ContainerBuilder();
            Assembly currentExecutingAssembly = Assembly.GetExecutingAssembly();

            var allAssemblies = AppDomain.CurrentDomain.GetAssemblies();

            // Register your Web API controllers.
            builder.RegisterApiControllers(currentExecutingAssembly);

            RegisterTypes(builder, allAssemblies);

            RegisterServices(builder);

            RegisterMaps(builder, allAssemblies);
            //RegisterCustomTypes(builder);
            RegisterMvc(builder, currentExecutingAssembly);

            // Register your SignalR hubs.
            builder.RegisterHubs(allAssemblies
                .Where(a => a.GetTypes().Where(t => t.Name == "ChatRHub").Any()).FirstOrDefault());

            return builder.Build();
        }

        private static void RegisterMvc(ContainerBuilder builder, Assembly assembly)
        {
            builder.RegisterModule<AutofacWebTypesModule>();// Register Common MVC Types
            builder.RegisterFilterProvider();// Register MVC Filters
            builder.RegisterControllers(assembly);// Register MVC Controllers
        }

        private static void RegisterTypes(ContainerBuilder builder, Assembly[] assemblies)
        {
            builder.RegisterType<ChatDataManager>().As<IChatRepository>().InstancePerRequest();
            builder.RegisterType<ChatManager>().AsSelf().InstancePerRequest();
            builder.RegisterType<ChatModel>().AsSelf().InstancePerRequest();
            builder.RegisterType<UserAccountManager>().AsSelf().InstancePerRequest();
        }

        private static void RegisterServices(ContainerBuilder builder)
        {

        }

        private static void RegisterMaps(ContainerBuilder builder, Assembly[] assemblies)
        {
            var autoMapperProfileTypes = assemblies.SelectMany(a => a.GetTypes()
                .Where(p => typeof(Profile).IsAssignableFrom(p) && p.IsPublic && !p.IsAbstract));
            var autoMapperProfiles = autoMapperProfileTypes
                .Select(p => (Profile)Activator.CreateInstance(p));

            builder.Register(ctx => new MapperConfiguration(cfg =>
            {
                foreach (var profile in autoMapperProfiles)
                {
                    cfg.AddProfile(profile);
                }
            }));

            builder.Register(ctx => ctx.Resolve<MapperConfiguration>().CreateMapper()).As<IMapper>();
        }

    }
}