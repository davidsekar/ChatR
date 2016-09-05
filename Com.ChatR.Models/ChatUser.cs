using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Com.ChatR.Models
{
    public class ChatUser
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public Guid ID { get; set; }
        [MaxLength(100)]
        public string Name { get; set; }
        [MaxLength(150)]
        [Index("Idx_User_Email", IsUnique = true, Order = 1, IsClustered = false)]
        public string Email { get; set; }
        [MaxLength(100)]
        public string PasswordHash { get; set; }
    }
}
