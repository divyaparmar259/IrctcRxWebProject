using Microsoft.AspNetCore.Mvc;
using MainIRCTC.Domain.PNRModule;
using RxWeb.Core.AspNetCore;
using MainIRCTC.Models.Main;

namespace MainIRCTC.Api.Controllers.PNRModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class pnrsgenerationController : BaseDomainController<PNRGeneration, PNRGeneration>

    {
        public pnrsgenerationController(IpnrsgenerationDomain domain):base(domain) {}

    }
}
