using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using MainIRCTC.UnitOfWork.Main;
using MainIRCTC.Models.Main;

namespace MainIRCTC.Domain.HotelInvoiceModule
{
    public class HotelInvoiceDomain : IHotelInvoiceDomain
    {
        public HotelInvoiceDomain(IHotelInvoiceUow uow) {
            this.Uow = uow;
        }

        public  Task<object> GetAsync(vHotelInvoice parameters)
        {
            throw new NotImplementedException();
        }

        public async Task<object> GetBy(vHotelInvoice parameters)
        {
            return await Uow.Repository<vHotelInvoice>().FindByAsync(t => t.HotelBookingId == parameters.HotelBookingId);

        }
        

        public HashSet<string> AddValidation(vHotelInvoice entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(vHotelInvoice entity)
        {
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(vHotelInvoice entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(vHotelInvoice entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(vHotelInvoice parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(vHotelInvoice parameters)
        {
            throw new NotImplementedException();
        }

        public IHotelInvoiceUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IHotelInvoiceDomain : ICoreDomain<vHotelInvoice, vHotelInvoice> { }
}
