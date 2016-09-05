namespace Com.ChatR.MsSqlProvider
{
    using Migrations;
    using System.Data.Entity;
    public class ChatModelInitializer
    {
        public static void Initialize()
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<ChatModel, Configuration>());
        }
    }
}
