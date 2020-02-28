using Microsoft.AspNetCore.Mvc;
using MainIRCTC.Domain.BookPassengerModule;
using RxWeb.Core.AspNetCore;
using MainIRCTC.Models.Main;

namespace MainIRCTC.Api.Controllers.BookPassengerModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class BookPassengersController : BaseDomainController<Passenger,Passenger>

    {
        public BookPassengersController(IBookPassengerDomain domain):base(domain) {}

    }
}
