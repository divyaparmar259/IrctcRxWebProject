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

namespace MainIRCTC.Domain.TrainModule
{
    public class TrainBookingDomain : ITrainBookingDomain
    {
        public TrainBookingDomain(ITrainUow uow, IDbContextManager<MainSqlDbContext> dbContextManager) {
            this.Uow = uow;
            DbContextManager = dbContextManager;
        }

        public Task<object> GetAsync( BookTrainResult parameters)
        {
            throw new NotImplementedException();
        }

        public Task<object> GetBy(BookTrainResult parameters)
        {
            throw new NotImplementedException();
        }
        

        public HashSet<string> AddValidation(BookTrainResult entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(BookTrainResult entity)
        {
            var spParameters = new SqlParameter[11];
            spParameters[0] = new SqlParameter() { ParameterName = "BookTrainId", Value = entity.BookTrainId };
            spParameters[1] = new SqlParameter() { ParameterName = "UserId", Value = entity.UserId };
            spParameters[2] = new SqlParameter() { ParameterName = "TrainName", Value = entity.TrainName };
            spParameters[3] = new SqlParameter() { ParameterName = "StationStartingPoint", Value = entity.StationStartingPoint };
            spParameters[4] = new SqlParameter() { ParameterName = "StationEndingPoint", Value = entity.StationEndingPoint };
            spParameters[5] = new SqlParameter() { ParameterName = "StationArriveTime", Value = entity.StationArriveTime };
            spParameters[6] = new SqlParameter() { ParameterName = "StationDepartTime", Value = entity.StationDepartTime };
            spParameters[7] = new SqlParameter() { ParameterName = "TrainObjectTypeName", Value = entity.TrainObjectTypeName };
            spParameters[8] = new SqlParameter() { ParameterName = "TrainAvailableDay", Value = entity.TrainAvailableDay };
            spParameters[9] = new SqlParameter() { ParameterName = "TrainApplicationObjectClassName", Value = entity.TrainApplicationObjectClassName };
            spParameters[10] = new SqlParameter() { ParameterName = "data", Value = entity.data };
            

            await DbContextManager.StoreProc<StoreProcResult>("[dbo].spBookTrainResult ", spParameters);
            try
            {
                await DbContextManager.CommitAsync();
            }
            catch (Exception)
            {
                DbContextManager.RollbackTransaction();
            }
        }

        public HashSet<string> UpdateValidation(BookTrainResult entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(BookTrainResult entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(BookTrainResult parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(BookTrainResult parameters)
        {
            throw new NotImplementedException();
        }

        public ITrainUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
        private IDbContextManager<MainSqlDbContext> DbContextManager { get; set; }
    }

    public interface ITrainBookingDomain : ICoreDomain<BookTrainResult, BookTrainResult> { }
}
