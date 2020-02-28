using Microsoft.AspNetCore.Mvc;
using System.Linq;
using MainIRCTC.Domain.Module;
using MainIRCTC.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace CleanArchitecture3.Api.Controllers.Module
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class TrainSearchResultController : BaseDomainController<SearchTrainResult, SearchTrainResult>

    {
        public TrainSearchResultController(ITrainSearchResultDomain domain):base(domain) {}

    }
}
