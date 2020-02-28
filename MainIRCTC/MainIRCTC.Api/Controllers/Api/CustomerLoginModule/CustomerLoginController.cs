using Microsoft.AspNetCore.Mvc;
using System.Linq;
using MainIRCTC.Domain.CustomerLoginModule;
using MainIRCTC.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace MainIRCTC.Api.Controllers.CustomerLoginModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class CustomerLoginController : BaseDomainController<Customer,Customer>

    {
        public CustomerLoginController(ICustomerLoginDomain domain):base(domain) {}

    }
}
