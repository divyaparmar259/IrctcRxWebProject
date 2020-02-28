using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using MainIRCTC.UnitOfWork.Main;
using MainIRCTC.Models.Main;

namespace MainIRCTC.Domain.BookPassengerModule
{
    public class BookPassengerDomain : IBookPassengerDomain
    {
        //private object count;

        public BookPassengerDomain(IBookPassengerUow uow) {
            this.Uow = uow;
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
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
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

    

        public IBookPassengerUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IBookPassengerDomain : ICoreDomain<Passenger, Passenger> { }
}
