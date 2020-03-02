using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using MainIRCTC.UnitOfWork.Main;
using MainIRCTC.Models.Main;



namespace MainIRCTC.Domain.TrainModule
{
    public class PassengerInvoiceDetailDomain : IPassengerInvoiceDetailDomain
    {
        public PassengerInvoiceDetailDomain(ITrainUow uow) {
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
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
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
        
    }

    public interface IPassengerInvoiceDetailDomain : ICoreDomain<PassengerInvoice, PassengerInvoice> { }
}
