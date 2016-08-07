using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(Com.ChatR.Web.Startup))]

namespace Com.ChatR.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
            ConfigureContainer(app);
        }
    }
}
