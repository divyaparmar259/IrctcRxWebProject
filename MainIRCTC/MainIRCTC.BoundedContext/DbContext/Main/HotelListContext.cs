using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using MainIRCTC.BoundedContext.SqlContext;
using MainIRCTC.Models.Main;
using MainIRCTC.Models;
using MainIRCTC.BoundedContext.Singleton;
using RxWeb.Core.Data;
using RxWeb.Core.Data.Models;
using RxWeb.Core.Data.BoundedContext;

namespace MainIRCTC.BoundedContext.Main
{
    public class HotelListContext : BaseBoundedContext, IHotelListContext
    {
        public HotelListContext(MainSqlDbContext sqlDbContext,  IOptions<DatabaseConfig> databaseConfig, IHttpContextAccessor contextAccessor,ITenantDbConnectionInfo tenantDbConnection): base(sqlDbContext, databaseConfig.Value, contextAccessor,tenantDbConnection){ }

            #region DbSets
            		public DbSet<vHotel> vHotels { get; set; }
            #endregion DbSets


    }


    public interface IHotelListContext : IDbContext
    {
    }
}

