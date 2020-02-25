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
            using MainIRCTC.Domain.vHotelModule;
            using MainIRCTC.Domain.PnrNumberModule;
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

            #region ContextService

            serviceCollection.AddScoped<ILoginContext, LoginContext>();
            serviceCollection.AddScoped<ILoginUow, LoginUow>();
                        serviceCollection.AddScoped<IMasterContext, MasterContext>();
            serviceCollection.AddScoped<IMasterUow, MasterUow>();
                        serviceCollection.AddScoped<IAdminTrainContext, AdminTrainContext>();
            serviceCollection.AddScoped<IAdminTrainUow, AdminTrainUow>();
                    
                        serviceCollection.AddScoped<IAdminHotelContext, AdminHotelContext>();
            serviceCollection.AddScoped<IAdminHotelUow, AdminHotelUow>();
            
                        serviceCollection.AddScoped<IVHotelsContext, VHotelsContext>();
            serviceCollection.AddScoped<IVHotelsUow, VHotelsUow>();
                        serviceCollection.AddScoped<IPnrNumbersContext, PnrNumbersContext>();
            serviceCollection.AddScoped<IPnrNumbersUow, PnrNumbersUow>();
            #endregion ContextService


















            #region DomainService

      
            
            serviceCollection.AddScoped<IvHotelDomain, vHotelDomain>();
            
            serviceCollection.AddScoped<IPnrNumberDomain, PnrNumberDomain>();
            #endregion DomainService









        }
    }
}




