using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using MainIRCTC.UnitOfWork.Main;
using MainIRCTC.Models.Main;
using System.Linq;

namespace MainIRCTC.Domain.PnrNumberModule
{
    public class PnrNumberDomain : IPnrNumberDomain
    {
        public PnrNumberDomain(IPnrNumbersUow uow) {
            this.Uow = uow;
        }

        public async Task<object> GetAsync(PNRGeneration parameters)
        {
            //throw new NotImplementedException();
            return Uow.Repository<PNRGeneration>().Queryable().Where(a =>a.PaymentId != null);
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

        public IPnrNumbersUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IPnrNumberDomain : ICoreDomain<PNRGeneration, PNRGeneration> { }
}
