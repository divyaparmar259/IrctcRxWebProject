using Microsoft.AspNetCore.Mvc;
using System.Linq;
using MainIRCTC.Domain.CancellationModule;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;
using MainIRCTC.Models.Main;

namespace MainIRCTC.Api.Controllers.CancellationModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class CancellationsController : BaseDomainController<EWallet, EWallet>

    {
        public CancellationsController(ICancellationDomain domain):base(domain) {}

    }
}
