using System;
using System.ComponentModel.DataAnnotations;

namespace Com.ChatR.Core.Dtos
{
    public class ChatUserDto
    {
        public Guid ID { get; set; }
        [MaxLength(100)]
        public string Name { get; set; }
        [MaxLength(150)]
        public string Email { get; set; }
    }
}
