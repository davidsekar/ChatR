using System;
using System.ComponentModel.DataAnnotations;

namespace Com.ChatR.Core.Dtos
{
    public class ChatParticipantDto
    {
        public Guid Id { get; set; }
        [MaxLength(50)]
        public string Name { get; set; }

        [Required]
        public Guid RoomId { get; set; }
    }
}
