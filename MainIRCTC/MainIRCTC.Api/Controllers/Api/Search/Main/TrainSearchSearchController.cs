using System.Collections.Generic;
using Microsoft.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RxWeb.Core.Security;
using RxWeb.Core.Data;
//using RxWeb.Core.Common.Binder;
using MainIRCTC.Models.ViewModels;
using MainIRCTC.BoundedContext.SqlContext;
namespace MainIRCTC.Api.Controllers.Module
{
    [ApiController]
	[Route("api/[controller]")]
    public class SearchTrainSearchController : ControllerBase
    {
        private IDbContextManager<MainSqlDbContext> DbContextManager { get; set; }
        public SearchTrainSearchController(IDbContextManager<MainSqlDbContext> dbContextManager) {
            DbContextManager = dbContextManager;
        }

		[HttpPost]
        public async Task<IActionResult> Post([FromBody]Dictionary<string,string> searchParams)
        {
            var spParameters = new SqlParameter[4];
            spParameters[0] = new SqlParameter() { ParameterName = "StationSP", Value = searchParams ["StationSP"] };
            spParameters[1] = new SqlParameter() { ParameterName = "StationEP", Value = searchParams["StationEP"] };
            spParameters[2] = new SqlParameter() { ParameterName = "day", Value = searchParams["day"] };
            spParameters[3] = new SqlParameter() { ParameterName = "class", Value = searchParams["class"] };

            var result =await DbContextManager.StoreProc<StoreProcResult>("[dbo].spSearchTrainList ", spParameters);
            return Ok(result.SingleOrDefault()?.Result);
        }
    }
}
