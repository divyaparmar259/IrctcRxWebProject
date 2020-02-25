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
    public class AdminTrainContext : BaseBoundedContext, IAdminTrainContext
    {
        public AdminTrainContext(MainSqlDbContext sqlDbContext,  IOptions<DatabaseConfig> databaseConfig, IHttpContextAccessor contextAccessor,ITenantDbConnectionInfo tenantDbConnection): base(sqlDbContext, databaseConfig.Value, contextAccessor,tenantDbConnection){ }

            #region DbSets
            		public DbSet<Train> Train { get; set; }
		public DbSet<TrainApplicationObject> TrainApplicationObject { get; set; }
		public DbSet<TrainApplicationObjectType> TrainApplicationObjectType { get; set; }
		public DbSet<TrainAvailable> TrainAvailable { get; set; }
		public DbSet<Station> Station { get; set; }
		public DbSet<StationDetail> StationDetail { get; set; }
            #endregion DbSets


    }


    public interface IAdminTrainContext : IDbContext
    {
    }
}

