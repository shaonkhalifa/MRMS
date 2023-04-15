using MRMS.MAUI.Models;
using MRMS.Shared.Constants;
using System.Net.Http.Json;
using System.Text.Json;

namespace MRMS.MAUI.Services
{
    public class AgentService : BaseService
    {

        public async Task<IEnumerable<Agent>> GetAgentsAsync()
        {
            var url = APIConstants.BASE_URL + "agents";
            return await HttpClientInstance.GetFromJsonAsync<IEnumerable<Agent>>(url);
        }

        public async Task<Agent> GetAgentByAgentIdAsync(int agentId)
        {
            return await HttpClientInstance.GetFromJsonAsync<Agent>(APIConstants.BASE_URL + $"agents/{agentId}");
        }

        public async Task<HttpResponseMessage> AddAgentAsync(Agent agent)
        {
            return await HttpClientInstance.PostAsJsonAsync(APIConstants.BASE_URL + "agents", agent);
        }

        public async Task<HttpResponseMessage> UpdateAgentAsync(Agent agent)
        {
            return await HttpClientInstance.PutAsJsonAsync(APIConstants.BASE_URL + "agents", agent);
        }

        public async Task<HttpResponseMessage> DeleteAgentAsync(int id)
        {
            return await HttpClientInstance.DeleteAsync(APIConstants.BASE_URL + $"agents/{id}");
        }
    }
}
