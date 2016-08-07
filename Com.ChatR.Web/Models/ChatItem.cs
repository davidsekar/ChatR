using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Com.ChatR.Web.Models
{
    public class ChatItem
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public String UserName { get; set; }
        public String Message { get; set; }
        public DateTime DateTime { get; set; }
    }
}