namespace Com.ChatR.Web
{
    using Microsoft.Owin;
    using Microsoft.Owin.Security;
    using Microsoft.Owin.Security.DataHandler.Encoder;
    using Microsoft.Owin.Security.Jwt;
    using Microsoft.Owin.Security.OAuth;
    using Owin;
    using Providers;
    using System;
    using System.Configuration;
    using System.Web.Mvc;

    public partial class Startup
    {
        public static void ConfigureAuthentication(IAppBuilder app)
        {
            ConfigureOAuthTokenGeneration(app);
            ConfigureOAuthTokenConsumption(app);

        }
        private static void ConfigureOAuthTokenGeneration(IAppBuilder app)
        {
            // Configure the db context and user manager to use a single instance per request
            //app.CreatePerOwinContext(ApplicationDbContext.Create);
            //app.CreatePerOwinContext<ApplicationUserManager>(ApplicationUserManager.Create);
            //app.CreatePerOwinContext<ApplicationRoleManager>(ApplicationRoleManager.Create);

            var issuer = System.Web.HttpContext.Current.Request.Url.GetLeftPart(UriPartial.Authority);

            OAuthAuthorizationServerOptions OAuthServerOptions = new OAuthAuthorizationServerOptions()
            {
                //For Dev enviroment only (on production should be AllowInsecureHttp = false)
                AllowInsecureHttp = true,
                TokenEndpointPath = new PathString("/oauth/token"),
                AccessTokenExpireTimeSpan = TimeSpan.FromDays(1),
                Provider = DependencyResolver.Current.GetService<CustomOAuthProvider>(),
                AccessTokenFormat = new CustomJwtFormat(issuer)
            };

            // OAuth 2.0 Bearer Access Token Generation
            app.UseOAuthAuthorizationServer(OAuthServerOptions);
        }

        private static void ConfigureOAuthTokenConsumption(IAppBuilder app)
        {

            var issuer = System.Web.HttpContext.Current.Request.Url.GetLeftPart(UriPartial.Authority);
            string audienceId = ConfigurationManager.AppSettings["as:AudienceId"];
            byte[] audienceSecret = TextEncodings.Base64Url
                .Decode(ConfigurationManager.AppSettings["as:AudienceSecret"]);

            // Api controllers with an [Authorize] attribute will be validated with JWT
            app.UseJwtBearerAuthentication(
                new JwtBearerAuthenticationOptions
                {
                    AuthenticationMode = AuthenticationMode.Active,
                    AllowedAudiences = new[] { audienceId },
                    IssuerSecurityTokenProviders = new IIssuerSecurityTokenProvider[]
                    {
                        new SymmetricKeyIssuerSecurityTokenProvider(issuer, audienceSecret)
                    }
                });
        }
    }
}
