namespace Com.ChatR.Core
{
    using AutoMapper;
    using Dtos;
    using Models;
    using Repository;
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    public class ChatManager
    {
        private readonly IChatRepository _repo;
        private readonly IMapper _mapper;
        public ChatManager(IChatRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        public async Task<ChatRoomDto> CreateChatRoom(ChatRoomDto room)
        {
            var cRoom = _mapper.Map<ChatRoom>(room);
            cRoom.Id = Guid.NewGuid();
            bool result = await _repo.AddRoom(cRoom);

            if (result)
                return room = _mapper.Map<ChatRoomDto>(cRoom);

            return null;
        }

        public async Task<List<ChatRoomDto>> GetAllChatRooms()
        {
            var rooms = await _repo.GetRooms();
            return _mapper.Map<List<ChatRoomDto>>(rooms);
        }

        public async Task<List<ChatRoomDto>> GetChatRooms(int pageNo, int pageSize)
        {
            int skip = pageNo <= 1 ? 0 : ((pageNo - 1) * pageSize);
            var rooms = await _repo.GetRooms(skip, pageSize);
            return _mapper.Map<List<ChatRoomDto>>(rooms);
        }

        public async Task<ChatParticipantDto> CreateParticipant(ChatParticipantDto participant)
        {
            var cParticipant = _mapper.Map<ChatParticipant>(participant);

            bool result = await _repo.AddParticipant(cParticipant);

            if (result)
                return _mapper.Map<ChatParticipantDto>(cParticipant);
            return null;
        }
    }
}
