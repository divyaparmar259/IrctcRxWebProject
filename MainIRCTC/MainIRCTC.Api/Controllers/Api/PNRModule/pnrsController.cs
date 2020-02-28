using Microsoft.AspNetCore.Mvc;
using MainIRCTC.Domain.PNRModule;
using RxWeb.Core.AspNetCore;
using MainIRCTC.Models.Main;

namespace MainIRCTC.Api.Controllers.PNRModule
{
    [ApiController]
    [Route("api/[controller]")]

    public class pnrsController : BaseDomainController<vPNR, vPNR>

    {
        public pnrsController(IpnrDomain domain):base(domain) {}

    }
}
