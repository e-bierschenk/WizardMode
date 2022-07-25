using System.Text.Json.Serialization;

namespace WizardMode.Models
{
    public class Machine
    {
        [JsonPropertyName("opdb_id")]
        public string opdb_id { get; set; }

        [JsonPropertyName("is_machine")]
        public bool is_machine { get; set; }

        [JsonPropertyName("name")]
        public string name { get; set; }

        [JsonPropertyName("physical_machine")]
        public int physical_machine { get; set; }

        [JsonPropertyName("ipdb_id")]
        public int ipdb_id { get; set; }

        [JsonPropertyName("manufacture_date")]
        public string manufacture_date { get; set; }

        [JsonPropertyName("manufacturer")]
        public Manufacturer manufacturer { get; set; }

        [JsonPropertyName("type")]
        public string type { get; set; }

        [JsonPropertyName("display")]
        public string display { get; set; }

        [JsonPropertyName("player_count")]
        public int player_count { get; set; }

        [JsonPropertyName("features")]
        public string[] features { get; set; }

        [JsonPropertyName("keywords")]
        public string[] keywords { get; set; }
        
        [JsonPropertyName("description")]
        public string description { get; set; }

        [JsonPropertyName("created_at")]
        public string created_at { get; set; }

        [JsonPropertyName("updated_at")]
        public string updated_at { get; set; }

        [JsonPropertyName("images")]
        public Image[] images { get; set; }


        public class Manufacturer
        {
            [JsonPropertyName("manufacturer_id")]
            public int manufacturer_id { get; set; }

            [JsonPropertyName("name")]
            public string name { get; set; }

            [JsonPropertyName("full_name")]
            public string full_name { get; set; }

            [JsonPropertyName("created_at")]
            public string created_at { get; set; }

            [JsonPropertyName("updated_at")]
            public string updated_at { get; set; }
        }

        public class Image
        {
            [JsonPropertyName("tite")]
            public string title { get; set; }

            [JsonPropertyName("primary")]
            public bool primary { get; set; }

            [JsonPropertyName("type")]
            public string type { get; set; }

            [JsonPropertyName("urls")]
            public Urls urls { get; set; }

            [JsonPropertyName("sizes")]
            public Sizes sizes { get; set; }
        }

        public class Urls
        {
            [JsonPropertyName("medium")]
            public string medium { get; set; }

            [JsonPropertyName("large")]
            public string large { get; set; }

            [JsonPropertyName("small")]
            public string small { get; set; }
        }

        public class Sizes
        {
            [JsonPropertyName("medium")]
            public Medium medium { get; set; }

            [JsonPropertyName("large")]
            public Large large { get; set; }

            [JsonPropertyName("small")]
            public Small small { get; set; }
        }

        public class Medium
        {
            [JsonPropertyName("width")]
            public int width { get; set; }

            [JsonPropertyName("height")]
            public int height { get; set; }
        }

        public class Large
        {
            [JsonPropertyName("width")]
            public int width { get; set; }

            [JsonPropertyName("height")]
            public int height { get; set; }
        }

        public class Small
        {
            [JsonPropertyName("width")]
            public int width { get; set; }

            [JsonPropertyName("height")]
            public int height { get; set; }
        }

    }
}
