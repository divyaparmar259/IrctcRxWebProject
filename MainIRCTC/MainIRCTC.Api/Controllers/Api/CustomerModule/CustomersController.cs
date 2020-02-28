using Microsoft.AspNetCore.Mvc;
using MainIRCTC.Domain.CustomerModule;
using RxWeb.Core.AspNetCore;
using MainIRCTC.Models.Main;

namespace MainIRCTC.Api.Controllers.CustomerModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class CustomersController : BaseDomainController<Customer,Customer>

    {
        public CustomersController(ICustomerDomain domain):base(domain) {}

    }
}
