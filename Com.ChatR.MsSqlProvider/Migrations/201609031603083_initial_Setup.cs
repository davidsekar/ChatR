namespace Com.ChatR.MsSqlProvider.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initial_Setup : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ChatUsers",
                c => new
                    {
                        ID = c.Guid(nullable: false, identity: true),
                        Name = c.String(maxLength: 100),
                        Email = c.String(maxLength: 150),
                        PasswordHash = c.String(maxLength: 100),
                    })
                .PrimaryKey(t => t.ID);
            
            AddColumn("dbo.ChatParticipants", "UserId", c => c.Guid(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.ChatParticipants", "UserId");
            DropTable("dbo.ChatUsers");
        }
    }
}
