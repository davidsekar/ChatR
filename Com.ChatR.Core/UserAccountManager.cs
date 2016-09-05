namespace Com.ChatR.Core
{
    using AutoMapper;
    using Dtos;
    using Models;
    using Repository;
    using System.Data.SqlClient;
    using System.Threading.Tasks;

    public class UserAccountManager
    {
        private readonly IChatRepository _repo;
        private readonly IMapper _mapper;
        public UserAccountManager(IChatRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }
        public async Task<ChatUserDto> Authenticate(string email, string password)
        {
            var user = await _repo.Authenticate(email);

            if (user != null)
            {
                bool isValid = PasswordStorage.VerifyPassword(password, user.PasswordHash);
                if (isValid)
                    return _mapper.Map<ChatUserDto>(user);
            }

            return null;
        }
        public async Task<CustomResult> RegisterUser(RegisterInfoDto user)
        {
            CustomResult custom = new CustomResult();
            try
            {
                var userModel = _mapper.Map<ChatUser>(user);
                userModel.PasswordHash = PasswordStorage.CreateHash(user.Password);
                int success = await _repo.CreateUser(userModel);
                if (success > 0)
                {
                    custom.Code = 200;
                    custom.IsError = false;
                    custom.Message = "Account successfully created.";
                }
                else
                {
                    custom.Code = 500;
                    custom.IsError = true;
                    custom.Message = "Unable to create user account";
                }
            }
            catch (System.Data.DataException ex)
            {
                var baseException = ex.GetBaseException();

                if (baseException is SqlException)
                {
                    SqlException actualException = baseException as SqlException;
                    custom.Code = actualException.Number;

                    if (custom.Code == 2601)
                        custom.Message = "Email address already registered. Please use reset password to reset.";
                    else
                        custom.Message = actualException.Message;
                }
                else
                {
                    custom.Code = baseException.HResult;
                    custom.Message = baseException.Message;
                }
                custom.IsError = true;
            }

            return custom;
        }
    }
}
