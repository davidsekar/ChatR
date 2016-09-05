namespace Com.ChatR.Web.Controllers
{
    using ChatR.Models;
    using Core;
    using Core.Dtos;
    using System.Threading.Tasks;
    using System.Web.Http;

    public class AccountController : ApiController
    {
        private readonly UserAccountManager _userAccountManager;
        private readonly ChatRHub _chatRHub;
        public AccountController(UserAccountManager userAccountManager, ChatRHub chatRHub)
        {
            _userAccountManager = userAccountManager;
            _chatRHub = chatRHub;
        }

        [Route("api/authenticate")]
        public async Task<ChatUserDto> Authenticate(string email, string password)
        {
            return await _userAccountManager.Authenticate(email, password);
        }

        [Route("api/createuser")]
        public async Task<CustomResult> RegisterUser(RegisterInfoDto registerInfo)
        {
            return await _userAccountManager.RegisterUser(registerInfo);
        }
    }
}
