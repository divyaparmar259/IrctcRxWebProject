using Microsoft.AspNetCore.Mvc;
using System.Linq;
using MainIRCTC.Domain.HotelInvoiceModule;
using MainIRCTC.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace MainIRCTC.Api.Controllers.HotelInvoiceModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class HotelInvoicesController : BaseDomainController<vHotelInvoice, vHotelInvoice>

    {
        public HotelInvoicesController(IHotelInvoiceDomain domain):base(domain) {}

    }
}
