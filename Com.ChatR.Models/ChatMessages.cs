using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Com.ChatR.Models
{
    public class ChatMessage
    {
        [Key]
        public Guid Id { get; set; }
        [MaxLength(500)]
        public string Content { get; set; }
        public DateTime Time { get; set; }

        public Guid RoomId { get; set; }

        public Guid ParticipantId { get; set; }
        [ForeignKey("ParticipantId")]
        public ChatParticipant Participant { get; set; }
    }
}
