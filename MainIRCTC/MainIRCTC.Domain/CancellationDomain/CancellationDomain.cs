using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using MainIRCTC.UnitOfWork.Main;
using MainIRCTC.Domain.ewalletModule;
using MainIRCTC.Models.Main;

namespace MainIRCTC.Domain.CancellationModule
{
    public class CancellationDomain : ICancellationDomain
    {
        public CancellationDomain(ICancellationUow uow) {
            this.Uow = uow;
                        
        }

        public Task<object> GetAsync(EWallet parameters)
        {
            throw new NotImplementedException();
        }

        public async Task<object> GetBy(EWallet parameters)
        {
            
            var x = await Uow.Repository<PNRGeneration>().SingleOrDefaultAsync(t => t.PNRId == parameters.PNRId);
            if (x != null)
            {
                var pnrDetails = await Uow.Repository<PassengerInvoice>().SingleOrDefaultAsync(r => r.passengerInvoiceId == x.PassengerInvoiceId);
                var z = pnrDetails.TotalPrice / pnrDetails.NumberOfPassengers;
                var currentDate = DateTime.Now;
                var time = await Uow.Repository<Payment>().SingleOrDefaultAsync(r => r.UserId == x.UserId);               
                TimeSpan t = currentDate - time.PaymentDate;
                float d ;

             if (t.TotalHours <= 12)
              {
                 d = (50 * z)/100;              
               }
               else
            {               
                 d = (70 * z)/100;                  
                }
                parameters.PaymentId = x.PaymentId;
                parameters.UserId = x.UserId;
                parameters.Refund = d;
                await Uow.RegisterNewAsync(parameters);

                var deletePNR = Uow.Repository<PNRGeneration>().FindByKey(x.PNRId);
                await Uow.RegisterDeletedAsync(deletePNR);
                await Uow.CommitAsync();
                return "REFUND SUCCESSFUL";
            }
            else
            {
                return "PNR INVALID";
            } 
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

        public ICancellationUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
        private ewalletrefundDomain EwalletrefundDomain { get; set; }
        private EWallet EWallet { get; set; }
    }

    public interface ICancellationDomain : ICoreDomain<EWallet, EWallet> { }
}
