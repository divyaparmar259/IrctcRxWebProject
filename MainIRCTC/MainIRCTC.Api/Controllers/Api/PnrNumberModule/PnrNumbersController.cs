using Microsoft.AspNetCore.Mvc;
using System.Linq;
using MainIRCTC.Domain.PnrNumberModule;
using MainIRCTC.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace MainIRCTC.Api.Controllers.PnrNumberModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class PnrNumbersController : BaseDomainController<PNRGeneration, PNRGeneration>

    {
        public PnrNumbersController(IPnrNumberDomain domain):base(domain) {}

    }
}
