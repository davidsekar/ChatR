using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using Com.ChatR.Web.Models;
using Com.ChatR.Web.App_Start;

namespace Com.ChatR.Web.Controllers
{
	public class ChatController : ApiController
	{
		private ChatManager _manager;
		private ChatHub _chatHub;


		public ChatController(ChatManager chatManager)
		{
			_manager = chatManager;
			_chatHub = new ChatHub();
		}

		// GET api/<controller>
		public String GetNewUserId(String userName)
		{
			_manager.AddUser(userName);

			//broadcast the user list to all the clients
			_chatHub.SendUserList(_manager.GetAllUsers());
			return Guid.NewGuid().ToString();
		}

		// GET api/<controller>/5
		public List<ChatItem> Get()
		{
			return _manager.GetAllChat();
		}

		// POST api/<controller>
		public void PostChat(ChatItem chatItem)
		{
			chatItem.Id = Guid.NewGuid();
			chatItem.DateTime = DateTime.Now;
			_manager.AddChat(chatItem);

			//broadcast the chat to all the clients
			_chatHub.SendMessage(chatItem);
		}

		// PUT api/<controller>/5
		public void Put(int id, [FromBody]string value)
		{
		}

		// DELETE api/<controller>/5
		public void Delete(int id)
		{
		}
	}
}