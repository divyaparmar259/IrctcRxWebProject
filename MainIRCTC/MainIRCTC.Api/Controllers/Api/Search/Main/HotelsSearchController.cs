using System.Collections.Generic;
using Microsoft.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RxWeb.Core.Security;
using RxWeb.Core.Data;
using MainIRCTC.Models.ViewModels;
using MainIRCTC.BoundedContext.SqlContext;
using System;

namespace MainIRCTC.Api.Controllers.UserModule
{
    [ApiController]
	[Route("api/[controller]")]
    public class SearchHotelsController : ControllerBase
    {
        private IDbContextManager<MainSqlDbContext> DbContextManager { get; set; }
        public SearchHotelsController(IDbContextManager<MainSqlDbContext> dbContextManager) {
            DbContextManager = dbContextManager;
        }

		[HttpPost]
        public async Task<IActionResult> Post([FromBody]Dictionary<string,string> searchParams)
        {
            var spParameters = new SqlParameter[1];
            spParameters[0] = new SqlParameter() { ParameterName = "City", Value = searchParams["City"] };
            var result = await DbContextManager.StoreProc<StoreProcResult>("[dbo].spHotels", spParameters);
            return Ok(result.ToList());
        }

    }
}
