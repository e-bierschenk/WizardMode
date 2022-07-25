namespace WizardMode.Models
{
    public class Class
    {

        public class Rootobject
        {
            public Class1[] Property1 { get; set; }
        }

        public class Class1
        {
            public string opdb_id { get; set; }
            public bool is_machine { get; set; }
            public string name { get; set; }
            public string common_name { get; set; }
            public string shortname { get; set; }
            public int physical_machine { get; set; }
            public int ipdb_id { get; set; }
            public string manufacture_date { get; set; }
            public Manufacturer manufacturer { get; set; }
            public string type { get; set; }
            public string display { get; set; }
            public int player_count { get; set; }
            public string[] features { get; set; }
            public string[] keywords { get; set; }
            public string description { get; set; }
            public string created_at { get; set; }
            public string updated_at { get; set; }
            public Image[] images { get; set; }
            public bool is_alias { get; set; }
        }

        public class Manufacturer
        {
            public int manufacturer_id { get; set; }
            public string name { get; set; }
            public string full_name { get; set; }
            public string created_at { get; set; }
            public string updated_at { get; set; }
        }

        public class Image
        {
            public string title { get; set; }
            public bool primary { get; set; }
            public string type { get; set; }
            public Urls urls { get; set; }
            public Sizes sizes { get; set; }
        }

        public class Urls
        {
            public string medium { get; set; }
            public string large { get; set; }
            public string small { get; set; }
        }

        public class Sizes
        {
            public Medium medium { get; set; }
            public Large large { get; set; }
            public Small small { get; set; }
        }

        public class Medium
        {
            public int width { get; set; }
            public int height { get; set; }
        }

        public class Large
        {
            public int width { get; set; }
            public int height { get; set; }
        }

        public class Small
        {
            public int width { get; set; }
            public int height { get; set; }
        }

    }
}
