using MRMS_Blazor.Shared.Authentication;


namespace MRMS_Blazor.Server.Services
{
    public interface IAuthenticateService
    {
        User Authenticate(string username, string password);
    }
}
