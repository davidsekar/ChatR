using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

using Com.ChatR.Web.Models;

namespace Com.ChatR.Web.App_Start
{
    [HubName("MyChatHub")]
    public class ChatHub: Hub
    {
        /// <summary>
        /// Broadcasts the chat message to all the clients
        /// </summary>
        /// <param name="chatItem"></param>
        public void SendMessage(ChatItem chatItem)
        {
            IHubContext context = GlobalHost.ConnectionManager.GetHubContext("MyChatHub");
            context.Clients.All.pushNewMessage(chatItem.Id, chatItem.UserId, chatItem.UserName, chatItem.Message, chatItem.DateTime);
        }

		/// <summary>
		/// Broadcasts the user list to the clients
		/// </summary>
		public void SendUserList(List<String> userList)
		{
			IHubContext context = GlobalHost.ConnectionManager.GetHubContext("MyChatHub");
			context.Clients.All.pushUserList(userList);
		}
    }
}