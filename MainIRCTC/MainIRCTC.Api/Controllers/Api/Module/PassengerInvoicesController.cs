using Microsoft.AspNetCore.Mvc;
using System.Linq;
using MainIRCTC.Domain.Module;
using MainIRCTC.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace MainIRCTC.Api.Controllers.Module
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class PassengerInvoicesController : BaseDomainController<PassengerInvoice, PassengerInvoice>

    {
        public PassengerInvoicesController(IPassengerInvoiceDomain domain):base(domain) {}

    }
}
