using Microsoft.AspNetCore.Mvc;
using System.Linq;
using MainIRCTC.Domain.TrainModule;
using MainIRCTC.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace MainIRCTC.Api.Controllers.TrainModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class PassengerInvoiceDetailsController : BaseDomainController<PassengerInvoice, PassengerInvoice>

    {
        public PassengerInvoiceDetailsController(IPassengerInvoiceDetailDomain domain):base(domain) {}

    }
}
