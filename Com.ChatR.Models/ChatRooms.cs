using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Com.ChatR.Models
{
    public class ChatRoom
    {
        [Key]
        public Guid Id { get; set; }
        [StringLength(255)]
        [Required]
        public string Name { get; set; }
        [StringLength(50)]
        public string SecretKey { get; set; }
        public bool IsPrivate { get; set; }

        public virtual ICollection<ChatParticipant> Participants { get; set; }

        public virtual ICollection<ChatMessage> Messages { get; set; }
    }
}
