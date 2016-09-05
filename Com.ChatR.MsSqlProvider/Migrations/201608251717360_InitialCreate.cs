namespace Com.ChatR.MsSqlProvider.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ChatMessages",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        Content = c.String(maxLength: 500),
                        Time = c.DateTime(nullable: false),
                        RoomId = c.Guid(nullable: false),
                        ParticipantId = c.Guid(nullable: false),
                        ChatRoom_Id = c.Guid(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.ChatRooms", t => t.ChatRoom_Id)
                .ForeignKey("dbo.ChatParticipants", t => t.ParticipantId, cascadeDelete: true)
                .Index(t => t.ParticipantId)
                .Index(t => t.ChatRoom_Id);
            
            CreateTable(
                "dbo.ChatParticipants",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        Name = c.String(maxLength: 50),
                        RoomId = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.ChatRooms", t => t.RoomId, cascadeDelete: true)
                .Index(t => t.RoomId);
            
            CreateTable(
                "dbo.ChatRooms",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        Name = c.String(nullable: false, maxLength: 255),
                        SecretKey = c.String(maxLength: 50),
                        IsPrivate = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.ChatMessages", "ParticipantId", "dbo.ChatParticipants");
            DropForeignKey("dbo.ChatParticipants", "RoomId", "dbo.ChatRooms");
            DropForeignKey("dbo.ChatMessages", "ChatRoom_Id", "dbo.ChatRooms");
            DropIndex("dbo.ChatParticipants", new[] { "RoomId" });
            DropIndex("dbo.ChatMessages", new[] { "ChatRoom_Id" });
            DropIndex("dbo.ChatMessages", new[] { "ParticipantId" });
            DropTable("dbo.ChatRooms");
            DropTable("dbo.ChatParticipants");
            DropTable("dbo.ChatMessages");
        }
    }
}
