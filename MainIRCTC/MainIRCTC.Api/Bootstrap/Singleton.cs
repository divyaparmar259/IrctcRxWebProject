using Microsoft.Extensions.DependencyInjection;
using MainIRCTC.Infrastructure.Singleton;
using MainIRCTC.BoundedContext.Singleton;
using RxWeb.Core.Data;

namespace MainIRCTC.Api.Bootstrap
{
    public static class Singleton
    {
        public static void AddSingletonService(this IServiceCollection serviceCollection)
        {
            #region Singleton
            serviceCollection.AddSingleton<ITenantDbConnectionInfo, TenantDbConnectionInfo>();
            serviceCollection.AddSingleton(typeof(UserAccessConfigInfo));
            #endregion Singleton
        }

    }
}




