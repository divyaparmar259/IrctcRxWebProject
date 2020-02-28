using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using MainIRCTC.UnitOfWork.Main;
using MainIRCTC.Models.Main;

namespace MainIRCTC.Domain.PNRModule
{
    public class pnrsgenerationDomain : IpnrsgenerationDomain
    {
        public pnrsgenerationDomain(IPNRUow uow) {
            this.Uow = uow;
        }

        public Task<object> GetAsync(PNRGeneration parameters)
        {
            throw new NotImplementedException();
        }

        public Task<object> GetBy(PNRGeneration parameters)
        {
            throw new NotImplementedException();
        }
        

        public HashSet<string> AddValidation(PNRGeneration entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(PNRGeneration entity)
        {
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(PNRGeneration entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(PNRGeneration entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(PNRGeneration parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(PNRGeneration parameters)
        {
            throw new NotImplementedException();
        }

        public IPNRUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IpnrsgenerationDomain : ICoreDomain<PNRGeneration, PNRGeneration> { }
}
