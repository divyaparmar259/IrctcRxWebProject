using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using RxWeb.Core.Data;
using RxWeb.Core.Data.Models;
using RxWeb.Core.Data.BoundedContext;
using MainIRCTC.BoundedContext.SqlContext;
using MainIRCTC.Models.Main;

namespace MainIRCTC.BoundedContext.Main
{
    public class EwalletContext : BaseBoundedContext, IEwalletContext
    {
        public EwalletContext(MainSqlDbContext sqlDbContext,  IOptions<DatabaseConfig> databaseConfig, IHttpContextAccessor contextAccessor,ITenantDbConnectionInfo tenantDbConnection): base(sqlDbContext, databaseConfig.Value, contextAccessor,tenantDbConnection){ }

            #region DbSets
        public DbSet<EWallet> ewalletrefund { get; set; }
            #endregion DbSets

    }


    public interface IEwalletContext : IDbContext
    {
    }
}

