using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using MainIRCTC.UnitOfWork.Main;
using MainIRCTC.Models.Main;

namespace MainIRCTC.Domain.CustomerModule
{
    public class CustomerDomain : ICustomerDomain
    {
        public CustomerDomain(ICustomerUow uow) {
            this.Uow = uow;
        }

        public Task<object> GetAsync( Customer parameters)
        {
            throw new NotImplementedException();
        }

        public Task<object> GetBy(Customer parameters)
        {
            throw new NotImplementedException();
        }
        

        public HashSet<string> AddValidation(Customer entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(Customer entity)
        {
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(Customer entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(Customer entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(Customer parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(Customer parameters)
        {
            throw new NotImplementedException();
        }

        public ICustomerUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface ICustomerDomain : ICoreDomain<Customer, Customer> { }
}
