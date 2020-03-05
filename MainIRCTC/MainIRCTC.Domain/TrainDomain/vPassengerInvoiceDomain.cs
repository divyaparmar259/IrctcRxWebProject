using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using MainIRCTC.UnitOfWork.Main;
using MainIRCTC.Models.Main;

namespace MainIRCTC.Domain.TrainModule
{
    public class vPassengerInvoiceDomain : IvPassengerInvoiceDomain
    {
        public vPassengerInvoiceDomain(ITrainUow uow) {
            this.Uow = uow;
        }

        public async Task <object> GetAsync(vPassengerInvoice parameters)
        {
            return await Uow.Repository<vPassengerInvoice>().FindByAsync(t => t.UserId == parameters.UserId);
            //  throw new NotImplementedException();
        }

        public Task<object> GetBy(vPassengerInvoice parameters)
        {
            //return await Uow.Repository<vHotel>().FindByAsync(t => t. == parameters.UserId);
            throw new NotImplementedException();
        }
        

        public HashSet<string> AddValidation(vPassengerInvoice entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(vPassengerInvoice entity)
        {
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(vPassengerInvoice entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(vPassengerInvoice entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(vPassengerInvoice parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(vPassengerInvoice parameters)
        {
            throw new NotImplementedException();
        }

        public ITrainUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IvPassengerInvoiceDomain : ICoreDomain<vPassengerInvoice, vPassengerInvoice> { }
}
