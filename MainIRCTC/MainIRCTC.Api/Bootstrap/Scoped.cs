#region Namespace
using Microsoft.Extensions.DependencyInjection;
using MainIRCTC.Infrastructure.Security;
using RxWeb.Core.Data;
using RxWeb.Core.Security;
using RxWeb.Core.Annotations;
using RxWeb.Core;
using MainIRCTC.UnitOfWork.DbEntityAudit;
using MainIRCTC.BoundedContext.Main;
using MainIRCTC.UnitOfWork.Main;
   
            using MainIRCTC.Domain.HotelBookingModule;
            using MainIRCTC.Domain.HotelInvoiceModule;
            using MainIRCTC.Domain.HotelListModule;
            using MainIRCTC.Domain.CardModule;

using MainIRCTC.Domain.CancellationModule;
using MainIRCTC.Domain.CustomerLoginModule;
//using MainIRCTC.Domain.Module;
using MainIRCTC.Domain.TrainModule;
            #endregion Namespace




namespace MainIRCTC.Api.Bootstrap
{
    public static class ScopedExtension
    {

        public static void AddScopedService(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddScoped<IRepositoryProvider, RepositoryProvider>();
            serviceCollection.AddScoped<ITokenAuthorizer, TokenAuthorizer>();
            serviceCollection.AddScoped<IModelValidation, ModelValidation>();
            serviceCollection.AddScoped<IAuditLog, AuditLog>();
            serviceCollection.AddScoped<IApplicationTokenProvider, ApplicationTokenProvider>();
            serviceCollection.AddScoped(typeof(IDbContextManager<>), typeof(DbContextManager<>));
            serviceCollection.AddScoped<IHotelBookingDomain, HotelBookingDomain>();

            #region ContextService

            serviceCollection.AddScoped<ILoginContext, LoginContext>();
            serviceCollection.AddScoped<ILoginUow, LoginUow>();
            serviceCollection.AddScoped<ITrainContext, TrainContext>();
            serviceCollection.AddScoped<ITrainUow, TrainUow>();
            serviceCollection.AddScoped<ITrainContext, TrainContext>();
            serviceCollection.AddScoped<ITrainUow, TrainUow>();

            serviceCollection.AddScoped<IMasterContext, MasterContext>();
            serviceCollection.AddScoped<IMasterUow, MasterUow>();

            serviceCollection.AddScoped<ILoginContext, LoginContext>();
            serviceCollection.AddScoped<ILoginUow, LoginUow>();
                        serviceCollection.AddScoped<IMasterContext, MasterContext>();
            serviceCollection.AddScoped<IMasterUow, MasterUow>();
                        serviceCollection.AddScoped<IAdminTrainContext, AdminTrainContext>();
            serviceCollection.AddScoped<IAdminTrainUow, AdminTrainUow>();
                    
                        serviceCollection.AddScoped<IAdminHotelContext, AdminHotelContext>();
            serviceCollection.AddScoped<IAdminHotelUow, AdminHotelUow>();
            
          
                        serviceCollection.AddScoped<IHotelBookingContext, HotelBookingContext>();
            serviceCollection.AddScoped<IHotelBookingUow, HotelBookingUow>();
                        serviceCollection.AddScoped<IHotelInvoiceContext, HotelInvoiceContext>();
            serviceCollection.AddScoped<IHotelInvoiceUow, HotelInvoiceUow>();
                        
                        serviceCollection.AddScoped<IHotelListContext, HotelListContext>();
            serviceCollection.AddScoped<IHotelListUow, HotelListUow>();
                       
                        serviceCollection.AddScoped<ICardContext, CardContext>();
            serviceCollection.AddScoped<ICardUow, CardUow>();

            serviceCollection.AddScoped<ICustomerContext, CustomerContext>();
            serviceCollection.AddScoped<ICustomerUow, CustomerUow>();
            serviceCollection.AddScoped<ICustomerLoginContext, CustomerLoginContext>();
            serviceCollection.AddScoped<ICustomerLoginUow, CustomerLoginUow>();


            serviceCollection.AddScoped<IBookPassengerContext, BookPassengerContext>();
            serviceCollection.AddScoped<IBookPassengerUow, BookPassengerUow>();




            serviceCollection.AddScoped<ICancellationContext, CancellationContext>();
            serviceCollection.AddScoped<ICancellationUow, CancellationUow>();

            serviceCollection.AddScoped<IPNRContext, PNRContext>();
            serviceCollection.AddScoped<IPNRUow, PNRUow>();

                        serviceCollection.AddScoped<ICustomerLoginContext, CustomerLoginContext>();
            serviceCollection.AddScoped<ICustomerLoginUow, CustomerLoginUow>();
                        serviceCollection.AddScoped<ITrainContext, TrainContext>();
            serviceCollection.AddScoped<ITrainUow, TrainUow>();
            #endregion ContextService










            #region DomainService


          

         

            serviceCollection.AddScoped<IHotelBookingDomain, HotelBookingDomain>();
            
            serviceCollection.AddScoped<IHotelInvoiceDomain, HotelInvoiceDomain>();
            
            
            serviceCollection.AddScoped<IHotelListDomain, HotelListDomain>();
            
          
            
            serviceCollection.AddScoped<ICardDomain, CardDomain>();
            serviceCollection.AddScoped<ICancellationDomain, CancellationDomain>();
            
            serviceCollection.AddScoped<ICustomerLoginDomain, CustomerLoginDomain>();
            
            serviceCollection.AddScoped<ITrainBookingDomain, TrainBookingDomain>();
            
            serviceCollection.AddScoped<ITrainBookingDomain, TrainBookingDomain>();
            
            serviceCollection.AddScoped<IPassengerDetailDomain, PassengerDetailDomain>();
            
            serviceCollection.AddScoped<IPassengerInvoiceDetailDomain, PassengerInvoiceDetailDomain>();
            
            serviceCollection.AddScoped<IvPassengerInvoiceDomain, vPassengerInvoiceDomain>();
            #endregion DomainService














        }
    }
}
          

          