namespace MRMS.MAUI.Services
{
    public class BaseService
    {
        private HttpClient _httpClient;

        protected HttpClient HttpClientInstance => _httpClient ??= new HttpClient();
    }
}
