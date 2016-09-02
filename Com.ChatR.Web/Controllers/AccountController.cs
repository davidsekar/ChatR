using Com.ChatR.Core;
using System.Web.Http;

namespace Com.ChatR.Web.Controllers
{
    public class AccountController : ApiController
    {
        private readonly UserAccountManager _userAccountManager;
        private readonly ChatRHub _chatRHub;
        public AccountController(UserAccountManager userAccountManager, ChatRHub chatRHub)
        {
            _userAccountManager = userAccountManager;
            _chatRHub = chatRHub;
        }

        //[Route("api/authenticate")]
        //public async Task<string> Authenticate()
        //{
        //    _userAccountManager.a
        //    return "";
        //}
    }
}
