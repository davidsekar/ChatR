namespace Com.ChatR.Core
{
    using AutoMapper;
    using Repository;

    public class UserAccountManager
    {
        private readonly IChatRepository _repo;
        private readonly IMapper _mapper;
        public UserAccountManager(IChatRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }
        public void Authenticate(string email, string password)
        {

        }
    }
}
