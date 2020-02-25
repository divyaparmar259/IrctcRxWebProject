using System.Collections.Generic;

namespace MainIRCTC.Models
{
    public class SecurityConfig
    {
        public string[] AllowedHosts { get; set; }

        public string[] AllowedIps { get; set; }
    }
}

