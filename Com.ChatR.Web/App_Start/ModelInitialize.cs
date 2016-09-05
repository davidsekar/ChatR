namespace Com.ChatR.Web
{
    using MsSqlProvider;
    public partial class Startup
    {
        public static void ConfigureDatabase()
        {
            ChatModelInitializer.Initialize();
        }
    }
}
