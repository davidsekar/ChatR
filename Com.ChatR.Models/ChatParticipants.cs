using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Com.ChatR.Models
{
    public class ChatParticipant
    {
        [Key]
        public Guid Id { get; set; }
        [MaxLength(50)]
        public string Name { get; set; }

        [Required]
        public Guid RoomId { get; set; }

        [ForeignKey("RoomId")]
        public ChatRoom ChatRoom { get; set; }
    }
}
