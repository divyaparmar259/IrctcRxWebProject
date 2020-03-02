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
    public class PassengerDetailDomain : IPassengerDetailDomain
    {
        public PassengerDetailDomain(ITrainUow uow, IDbContextManager<MainSqlDbContext> dbContextManager) {
            this.Uow = uow;
            DbContextManager = dbContextManager;
        }

        public Task<object> GetAsync( Passenger parameters)
        {
            throw new NotImplementedException();
        }

        public Task<object> GetBy(Passenger parameters)
        {
            throw new NotImplementedException();
        }
        

        public HashSet<string> AddValidation(Passenger entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(Passenger entity)
        {
            var spParameters = new SqlParameter[6];
            spParameters[0] = new SqlParameter() { ParameterName = "PassengerId", Value = entity.PassengerId };
            spParameters[1] = new SqlParameter() { ParameterName = "userId", Value = entity.UserId };
            spParameters[2] = new SqlParameter() { ParameterName = "PassengerName", Value = entity.PassengerName };
            spParameters[3] = new SqlParameter() { ParameterName = "PassengerAge", Value = entity.PassengerAge };
            spParameters[4] = new SqlParameter() { ParameterName = "PassengerGender", Value = entity.PassengerGender };
            spParameters[5] = new SqlParameter() { ParameterName = "PassengerCountry", Value = entity.PassengerCountry };

            await DbContextManager.StoreProc<StoreProcResult>("[dbo].spPassengerDetails ", spParameters);
            try
            {
                await DbContextManager.CommitAsync();
            }
            catch (Exception)
            {
                DbContextManager.RollbackTransaction();
            }
        }

        public HashSet<string> UpdateValidation(Passenger entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(Passenger entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(Passenger parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(Passenger parameters)
        {
            throw new NotImplementedException();
        }

        public ITrainUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
        private IDbContextManager<MainSqlDbContext> DbContextManager { get; set; }
    }

    public interface IPassengerDetailDomain : ICoreDomain<Passenger, Passenger> { }
}
