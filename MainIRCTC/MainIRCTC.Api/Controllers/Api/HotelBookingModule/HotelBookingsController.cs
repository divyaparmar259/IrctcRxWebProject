using Microsoft.AspNetCore.Mvc;
using System.Linq;
using MainIRCTC.Domain.HotelBookingModule;
using MainIRCTC.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace MainIRCTC.Api.Controllers.HotelBookingModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class HotelBookingsController : BaseDomainController<HotelBooking, HotelBooking>

    {
        public HotelBookingsController(IHotelBookingDomain domain):base(domain) {}

    }
}
