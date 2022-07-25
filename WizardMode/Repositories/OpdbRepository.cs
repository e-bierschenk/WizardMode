using Microsoft.Extensions.Configuration;
using System.Net.Http;
using System.Net.Http.Headers;
using System.IO;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Text.Json;
using System.Configuration;
using Microsoft.Data.SqlClient;
using WizardMode.Models;


namespace WizardMode.Repositories
{
    public class OpdbRepository : BaseRepository, IOpdbRepository
    {
        private readonly string _apiKey;
        public OpdbRepository(IConfiguration configuration) : base(configuration)
        {
            _apiKey = configuration.GetValue<string>("OpdbApiKey");
        }

        public async Task<List<Machine>> SearchOpdb(string query)
        {
            var uri = $"https://opdb.org/api/search?api_token={_apiKey}&q={query}";
            var client = new HttpClient();

            client.DefaultRequestHeaders
                .Accept
                .Add(new MediaTypeWithQualityHeaderValue("application/json"));

            var response = await client.GetAsync(uri);
            if (response.IsSuccessStatusCode)
            {
                var json = await response.Content.ReadAsStreamAsync();
                var machineData = await JsonSerializer.DeserializeAsync<List<Machine>>(json);
                
                return machineData;
            }
            return null;
        }

        public async Task<Machine> GetMachineById(string opdbId)
        {
            var uri = $"https://opdb.org/api/machines/{opdbId}/?api_token={_apiKey}";
            var client = new HttpClient();

            client.DefaultRequestHeaders
                .Accept
                .Add(new MediaTypeWithQualityHeaderValue("application/json"));

            var response = await client.GetAsync(uri);
            if (response.IsSuccessStatusCode)
            {
                var json = await response.Content.ReadAsStreamAsync();
                var machineData = await JsonSerializer.DeserializeAsync<Machine>(json);

                return machineData;
            }
            return null;
        }
    }
}
