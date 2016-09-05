namespace Com.ChatR.Core.MapsProfiles
{
    using AutoMapper;
    using Dtos;
    using Models;
    public class ChatRMappings : Profile
    {
        public ChatRMappings()
        {
            CreateMap<ChatRoomDto, ChatRoom>().ReverseMap();
            CreateMap<ChatParticipantDto, ChatParticipant>().ReverseMap();
            CreateMap<ChatMessageDto, ChatMessage>().ReverseMap();
            CreateMap<ChatUserDto, ChatUser>().ReverseMap();
            CreateMap<RegisterInfoDto, ChatUser>().ReverseMap();
        }
    }
}
