using Microsoft.AspNetCore.Mvc;
using System.Linq;
using MainIRCTC.Domain.vHotelModule;
using MainIRCTC.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace MainIRCTC.Api.Controllers.vHotelModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class vHotelsController : BaseDomainController<vHotel, vHotel>

    {
        public vHotelsController(IvHotelDomain domain):base(domain) {}

    }
}
