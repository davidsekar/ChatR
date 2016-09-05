namespace Com.ChatR.MsSqlProvider.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UserEmailUnique : DbMigration
    {
        public override void Up()
        {
            DropIndex("dbo.ChatUsers", "Idx_User_Email");
            CreateIndex("dbo.ChatUsers", "Email", unique: true, name: "Idx_User_Email");
        }
        
        public override void Down()
        {
            DropIndex("dbo.ChatUsers", "Idx_User_Email");
        }
    }
}
