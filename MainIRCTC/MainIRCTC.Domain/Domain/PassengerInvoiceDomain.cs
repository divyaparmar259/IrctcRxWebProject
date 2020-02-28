using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using MainIRCTC.UnitOfWork.Main;
using MainIRCTC.Models.Main;
using RxWeb.Core.Data;
using MainIRCTC.BoundedContext.SqlContext;
using Microsoft.Data.SqlClient;
using MainIRCTC.Models.ViewModels;

namespace MainIRCTC.Domain.Module
{
    public class PassengerInvoiceDomain : IPassengerInvoiceDomain
    {
        public PassengerInvoiceDomain(ITrainUow uow) {
            this.Uow = uow;
        }

        public Task<object> GetAsync(PassengerInvoice parameters)
        {
            throw new NotImplementedException();
        }

        public Task<object> GetBy(PassengerInvoice parameters)
        {
            throw new NotImplementedException();
        }
        

        public HashSet<string> AddValidation(PassengerInvoice entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(PassengerInvoice entity)
        {
            var spParameters = new SqlParameter[1];
          //  spParameters[0] = new SqlParameter() { ParameterName = "userid", Value = entity.UserId };
           

            await DbContextManager.StoreProc<StoreProcResult>("[dbo].spPassengerInvoice ", spParameters);

            try
            {
                await DbContextManager.CommitAsync();
            }
            catch (Exception e)
            {
                DbContextManager.RollbackTransaction();
            }
        }

        public HashSet<string> UpdateValidation(PassengerInvoice entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(PassengerInvoice entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(PassengerInvoice parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(PassengerInvoice parameters)
        {
            throw new NotImplementedException();
        }

        public ITrainUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
        private IDbContextManager<MainSqlDbContext> DbContextManager { get; set; }
    }

    public interface IPassengerInvoiceDomain : ICoreDomain<PassengerInvoice, PassengerInvoice> { }
}
