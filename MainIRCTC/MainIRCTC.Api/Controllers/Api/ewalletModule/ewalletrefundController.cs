using Microsoft.AspNetCore.Mvc;
using MainIRCTC.Domain.ewalletModule;
using RxWeb.Core.AspNetCore;
using MainIRCTC.Models.Main;

namespace MainIRCTC.Api.Controllers.ewalletModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class ewalletrefundController : BaseDomainController<EWallet,EWallet>

    {
        public ewalletrefundController(IewalletrefundDomain domain):base(domain) {}

    }
}
