namespace Com.ChatR.MsSqlProvider
{
    using Models;
    using System.Data.Entity;

    public class ChatModel : DbContext
    {
        public ChatModel()
            : base("name=ChatRConnectionString")
        {
        }

        public virtual DbSet<ChatRoom> ChatRooms { get; set; }
        public virtual DbSet<ChatParticipant> ChatParticipants { get; set; }
        public virtual DbSet<ChatMessage> ChatMessages { get; set; }
    }
}