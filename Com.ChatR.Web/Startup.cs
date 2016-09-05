using Microsoft.Owin;
using Owin;
using System.Web.Optimization;

[assembly: OwinStartup(typeof(Com.ChatR.Web.Startup))]

namespace Com.ChatR.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            app.MapSignalR();
            ConfigureContainer(app);
            ConfigureAuthentication(app);
            ConfigureDatabase();
        }
    }
}
