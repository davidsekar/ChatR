namespace Com.ChatR.MsSqlProvider
{
    using Models;
    using Repository;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Linq;
    using System.Threading.Tasks;
    public class ChatDataManager : IChatRepository
    {
        private readonly ChatModel _dbContext;
        public ChatDataManager(ChatModel dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<bool> AddMessage(ChatMessage message)
        {
            bool isAdded = false;
            message = _dbContext.ChatMessages.Add(message);
            await _dbContext.SaveChangesAsync();
            if (message != null && message.Id != Guid.Empty)
                isAdded = true;
            return isAdded;
        }

        public async Task<bool> AddParticipant(ChatParticipant participant)
        {
            bool isAdded = false;
            participant = _dbContext.ChatParticipants.Add(participant);
            await _dbContext.SaveChangesAsync();
            if (participant != null && participant.Id != Guid.Empty)
                isAdded = true;
            return isAdded;
        }

        public async Task<bool> AddRoom(ChatRoom room)
        {
            bool isAdded = false;
            room = _dbContext.ChatRooms.Add(room);
            await _dbContext.SaveChangesAsync();
            if (room != null && room.Id != Guid.Empty)
                isAdded = true;
            return isAdded;
        }

        public List<ChatMessage> GetMessages(Guid roomId, int skip = 0, int take = 0)
        {
            var messages = _dbContext.ChatMessages.Where(c => c.RoomId == roomId);
            if (skip > 0)
                messages = messages.Skip(skip);
            if (take > 0)
                messages = messages.Take(take);
            return messages.ToList();
        }

        public List<ChatParticipant> GetParticipants(Guid roomId, int skip = 0, int take = 0)
        {
            var participants = _dbContext.ChatParticipants.Where(c => c.RoomId == roomId);
            if (skip > 0)
                participants = participants.Skip(skip);
            if (take > 0)
                participants = participants.Take(take);
            return participants.ToList();
        }

        public async Task<ChatRoom> GetChatRoomById(Guid roomId)
        {
            return await _dbContext.ChatRooms.Where(c => c.Id == roomId).FirstOrDefaultAsync();
        }

        public async Task<List<ChatRoom>> GetRooms(int skip = 0, int take = 0)
        {
            var rooms = _dbContext.ChatRooms.AsQueryable();
            if (skip > 0)
                rooms = rooms.Skip(skip);
            if (take > 0)
                rooms = rooms.Take(take);
            return await rooms.ToListAsync();
        }

        public async Task<ChatRoom> JoinChatRoom(ChatParticipant participant)
        {
            ChatRoom room = await GetChatRoomById(participant.RoomId);
            return room;
        }

        public async Task<bool> IsNameTaken(string name)
        {
            var count = await _dbContext.ChatParticipants
                .Where(p => p.Name.Equals(name, StringComparison.InvariantCultureIgnoreCase))
                .CountAsync();

            return count > 0 ? true : false;
        }

        public async Task<ChatUser> Authenticate(string email)
        {
            var user = await _dbContext.ChatUsers.Where(u => u.Email == email).FirstOrDefaultAsync();
            return user;
        }

        public async Task<int> CreateUser(ChatUser user)
        {
            _dbContext.ChatUsers.Add(user);
            return await _dbContext.SaveChangesAsync();
        }
    }
}
