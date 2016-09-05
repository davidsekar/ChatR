namespace Com.ChatR.Web.Providers
{
    using Core;
    using Microsoft.Owin.Security;
    using Microsoft.Owin.Security.OAuth;
    using System.Security.Claims;
    using System.Threading.Tasks;

    public class CustomOAuthProvider : OAuthAuthorizationServerProvider
    {
        private readonly UserAccountManager _userAccountManager;

        public CustomOAuthProvider(UserAccountManager userAccountManager)
        {
            _userAccountManager = userAccountManager;
        }

        public override Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
            return Task.FromResult<object>(null);
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {

            var allowedOrigin = "*";

            context.OwinContext.Response.Headers.Add("Access-Control-Allow-Origin", new[] { allowedOrigin });

            var user = await _userAccountManager.Authenticate(context.UserName, context.Password);

            if (user == null)
            {
                context.SetError("invalid_grant", "The user name or password is incorrect.");
                return;
            }

            var claims = new Claim[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Name),
                new Claim(ClaimTypes.Name, user.Email),
                new Claim("http://schemas.microsoft.com/accesscontrolservice/2010/07/claims/identityprovider", user.Email),
                new Claim("urn:Custom:UserType", "AnonymousUser")
            };

            System.Security.Claims.ClaimsIdentity oAuthIdentity = new System.Security.Claims.ClaimsIdentity(claims, "JWT"); // await user.GenerateUserIdentityAsync(userManager, "JWT");

            var ticket = new AuthenticationTicket(oAuthIdentity, null);

            context.Validated(ticket);

        }
    }
}
