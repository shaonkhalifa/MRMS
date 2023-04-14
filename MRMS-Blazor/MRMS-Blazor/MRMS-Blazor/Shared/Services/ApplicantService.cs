using MRMS_Blazor.Shared.ApplicantSection;
using MRMS_Blazor.Shared.CommonSection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Json;
using System.Text;
using System.Threading.Tasks;

namespace MRMS_Blazor.Shared.Services
{
    public class ApplicantService
    {
        private readonly HttpClient _httpClient;

        public ApplicantService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<IEnumerable<Applicant>> GetAgentsAsync()
        {
            return await _httpClient.GetFromJsonAsync<IEnumerable<Applicant>>("http://localhost:5146/api/applicants");
        }
    }
}
