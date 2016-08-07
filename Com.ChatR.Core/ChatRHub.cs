namespace Com.ChatR.Core
{
    using Dtos;
    using Microsoft.AspNet.SignalR;
    using Microsoft.AspNet.SignalR.Hubs;
    using System;
    using System.Collections.Generic;
    [HubName("ChatRHub")]
    public class ChatRHub : Hub
    {
        /// <summary>
        /// Broadcasts the chat message to all the clients
        /// </summary>
        /// <param name="message"></param>
        public void SendMessage(ChatMessageDto message)
        {
            IHubContext context = GlobalHost.ConnectionManager.GetHubContext("ChatRHub");
            context.Clients.All.pushNewMessage(message.Id, message.ParticipantId, message.ParticipantName, message.Content, message.Time);
        }

        /// <summary>
        /// Broadcasts the user list to the clients
        /// </summary>
        public void SendUserList(List<String> userList)
        {
            IHubContext context = GlobalHost.ConnectionManager.GetHubContext("ChatRHub");
            context.Clients.All.pushUserList(userList);
        }
    }
}
