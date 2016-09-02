namespace Com.ChatR.MsSqlProvider
{
    using Models;
    using System.Linq;

    public class UserAccount
    {
        private readonly ChatModel _dbContext;
        public UserAccount(ChatModel dbContext)
        {
            _dbContext = dbContext;
        }

        public ChatUser VerifyLogin(string email, string passwordHash)
        {
            ChatUser user = _dbContext.ChatUsers.Where(u => u.Email == email && u.PasswordHash == passwordHash).FirstOrDefault();
            return user;
        }
    }
}
