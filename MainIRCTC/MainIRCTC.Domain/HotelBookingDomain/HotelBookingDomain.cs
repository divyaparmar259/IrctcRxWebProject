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

namespace MainIRCTC.Domain.HotelBookingModule
{
    public class HotelBookingDomain : IHotelBookingDomain
    {
        public HotelBookingDomain(IHotelBookingUow uow, IDbContextManager<MainSqlDbContext>dbContextManager) {
            this.Uow = uow;
            DbContextManager = dbContextManager;
        }

        public Task<object> GetAsync(HotelBooking parameters)
        {
            throw new NotImplementedException();
        }

        public Task<object> GetBy(HotelBooking parameters)
        {
            throw new NotImplementedException();
        }


        public HashSet<string> AddValidation(HotelBooking entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(HotelBooking entity)
        {
        

            var spParameters = new SqlParameter[4];
            spParameters[0] = new SqlParameter() {ParameterName="UserId",Value=entity.UserId};
            spParameters[1] = new SqlParameter() { ParameterName = "HotelId", Value = entity.HotelId };
            spParameters[2] = new SqlParameter() { ParameterName = "CheckIn", Value = entity.UserCheckInDate };
            spParameters[3] = new SqlParameter() { ParameterName = "CheckOut", Value = entity.UserCheckOutDate };

            await DbContextManager.StoreProc<StoreProcResult>("[dbo].spHotelBooking ",spParameters);
            try
            {
                await DbContextManager.CommitAsync();
            }
            catch (Exception)
            {
                DbContextManager.RollbackTransaction();
            }

        }

        public HashSet<string> UpdateValidation(HotelBooking entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(HotelBooking entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(HotelBooking parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(HotelBooking parameters)
        {
            throw new NotImplementedException();
        }

        public IHotelBookingUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();

        private IDbContextManager<MainSqlDbContext> DbContextManager {get;set;}
    }

    public interface IHotelBookingDomain : ICoreDomain<HotelBooking,HotelBooking> { }
}
