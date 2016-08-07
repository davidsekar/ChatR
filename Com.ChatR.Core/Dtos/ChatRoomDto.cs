using System;
using System.ComponentModel.DataAnnotations;

namespace Com.ChatR.Core.Dtos
{
    public class ChatRoomDto
    {
        public Guid Id { get; set; }
        [StringLength(255)]
        [Required]
        public string Name { get; set; }
        [StringLength(50)]
        public string SecretKey { get; set; }
        public bool IsPrivate { get; set; }
    }
}
