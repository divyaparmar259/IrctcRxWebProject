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
    public class TrainSearchResultDomain : ITrainSearchResultDomain
    {
        public TrainSearchResultDomain(ITrainUow uow, IDbContextManager<MainSqlDbContext> dbContextManager) 
        {
            this.Uow = uow;
            DbContextManager = dbContextManager;
        }

        public Task<object> GetAsync(SearchTrainResult parameters)
        {
            throw new NotImplementedException();
        }

        public Task<object> GetBy(SearchTrainResult parameters)
        {
            throw new NotImplementedException();
        }
        

        public HashSet<string> AddValidation(SearchTrainResult entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(SearchTrainResult entity)
        {
            var spParameters = new SqlParameter[4];
            spParameters[0] = new SqlParameter() { ParameterName = "StationSP", Value = entity.StationSP };
            spParameters[1] = new SqlParameter() { ParameterName = "StationEP", Value = entity.StationEP };
            spParameters[2] = new SqlParameter() { ParameterName = "day", Value = entity.day };
            spParameters[3] = new SqlParameter() { ParameterName = "classname", Value = entity.classname };

            await DbContextManager.StoreProc<StoreProcResult>("[dbo].spSearchBookTrain ", spParameters);

            try
            {
                await DbContextManager.CommitAsync();
            }
            catch (Exception e)
            {
                DbContextManager.RollbackTransaction();
            }
        }

        public HashSet<string> UpdateValidation(SearchTrainResult entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(SearchTrainResult entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(SearchTrainResult parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(SearchTrainResult parameters)
        {
            throw new NotImplementedException();
        }

        public ITrainUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
        private IDbContextManager<MainSqlDbContext> DbContextManager { get; set; }
    }

    public interface ITrainSearchResultDomain : ICoreDomain<SearchTrainResult, SearchTrainResult> { }
}
