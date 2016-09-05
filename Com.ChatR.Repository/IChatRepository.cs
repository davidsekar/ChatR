namespace Com.ChatR.Repository
{
    using Models;
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    /// <summary>
    /// Defines the required methods for Chat storage providers
    /// </summary>
    public interface IChatRepository
    {
        Task<List<ChatRoom>> GetRooms(int skip = 0, int take = 0);
        List<ChatParticipant> GetParticipants(Guid roomId, int skip = 0, int take = 0);
        List<ChatMessage> GetMessages(Guid roomId, int skip = 0, int take = 0);
        Task<bool> AddRoom(ChatRoom room);
        Task<bool> AddMessage(ChatMessage message);
        Task<bool> AddParticipant(ChatParticipant participant);
        Task<bool> IsNameTaken(string name);
        Task<ChatRoom> JoinChatRoom(ChatParticipant participant);
        Task<ChatRoom> GetChatRoomById(Guid roomId);
        Task<ChatUser> Authenticate(string email);
        Task<int> CreateUser(ChatUser user);
    }
}
