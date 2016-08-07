using System;
using System.ComponentModel.DataAnnotations;

namespace Com.ChatR.Core.Dtos
{
    public class ChatMessageDto
    {
        public Guid Id { get; set; }
        [MaxLength(500)]
        public string Content { get; set; }
        public DateTime Time { get; set; }

        public Guid RoomId { get; set; }

        public Guid ParticipantId { get; set; }
        public Guid ParticipantName { get; set; }
    }
}
