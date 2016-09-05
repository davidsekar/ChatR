namespace Com.ChatR.Core.Dtos
{
    using System.ComponentModel.DataAnnotations;

    public class RegisterInfoDto
    {
        [MaxLength(100)]
        public string Name { get; set; }
        [MaxLength(150)]
        public string Email { get; set; }
        [MaxLength(100)]
        public string Password { get; set; }
    }
}
