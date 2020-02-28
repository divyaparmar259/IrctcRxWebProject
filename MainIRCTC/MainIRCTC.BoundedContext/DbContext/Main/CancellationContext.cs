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
    public class CancellationContext : BaseBoundedContext, ICancellationContext
    {
        public CancellationContext(MainSqlDbContext sqlDbContext,  IOptions<DatabaseConfig> databaseConfig, IHttpContextAccessor contextAccessor,ITenantDbConnectionInfo tenantDbConnection): base(sqlDbContext, databaseConfig.Value, contextAccessor,tenantDbConnection){ }

            #region DbSets
        public DbSet<PNRGeneration>PNRGenerations { get; set; }
        public DbSet<PassengerInvoice> PassengerInvoices { get; set; }
        public DbSet<Payment> Payments { get; set; }
        public DbSet<Train> Trains { get; set; }
        public DbSet<Passenger> Passengers { get; set; }
        public DbSet<EWallet> EWallets { get; set; }

        #endregion DbSets

    }


    public interface ICancellationContext : IDbContext
    {
    }
}

