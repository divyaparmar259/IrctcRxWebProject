using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using MainIRCTC.UnitOfWork.Main;
using MainIRCTC.Models.Main;

namespace MainIRCTC.Domain.ewalletModule
{
    public class ewalletrefundDomain : IewalletrefundDomain
    {
        public ewalletrefundDomain(IEwalletUow uow) {
            this.Uow = uow;
        }

        public Task<object> GetAsync(EWallet parameters)
        {
            throw new NotImplementedException();
        }

        public Task<object> GetBy(EWallet parameters)
        {
            throw new NotImplementedException();
        }
        

        public HashSet<string> AddValidation(EWallet entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(EWallet entity)
        {
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(EWallet entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(EWallet entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(EWallet parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(EWallet parameters)
        {
            throw new NotImplementedException();
        }

        public IEwalletUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IewalletrefundDomain : ICoreDomain<EWallet, EWallet> { }
}
