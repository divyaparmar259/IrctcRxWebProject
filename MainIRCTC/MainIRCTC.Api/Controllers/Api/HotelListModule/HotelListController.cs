using Microsoft.AspNetCore.Mvc;
using System.Linq;
using MainIRCTC.Domain.HotelListModule;
using MainIRCTC.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace MainIRCTC.Api.Controllers.HotelListModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class HotelListController : BaseDomainController<vHotel, vHotel>

    {
        public HotelListController(IHotelListDomain domain):base(domain) {}

    }
}
