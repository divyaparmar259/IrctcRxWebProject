using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using MainIRCTC.UnitOfWork.Main;
using MainIRCTC.Models.Main;

namespace MainIRCTC.Domain.vHotelModule
{
    public class vHotelDomain : IvHotelDomain
    {
        public vHotelDomain(IVHotelsUow uow) {
            this.Uow = uow;
        }

        public async Task<object> GetAsync(vHotel parameters)
        {
            //throw new NotImplementedException();
            return await Uow.Repository<vHotel>().AllAsync();
            
        }

        public async Task<object> GetBy(vHotel parameters)
        {
            //throw new NotImplementedException();

            return await Uow.Repository<vHotel>().SingleOrDefaultAsync(t =>t.CityName == parameters.CityName);
           
        }
        

        public HashSet<string> AddValidation(vHotel entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(vHotel entity)
        {
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();

        }

        public HashSet<string> UpdateValidation(vHotel entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(vHotel entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(vHotel parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(vHotel parameters)
        {
            throw new NotImplementedException();
        }

        public IVHotelsUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IvHotelDomain : ICoreDomain<vHotel, vHotel> { }
}
