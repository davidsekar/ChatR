namespace Com.ChatR.MsSqlProvider.Migrations
{
    using System.Data.Entity.Migrations;

    internal sealed class Configuration : DbMigrationsConfiguration<ChatModel>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            ContextKey = "Com.ChatR.MsSqlProvider.ChatModel";
        }

        protected override void Seed(ChatModel context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
        }
    }
}
