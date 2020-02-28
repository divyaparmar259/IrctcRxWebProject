using RxWeb.Core.Data;
using MainIRCTC.BoundedContext.Main;
using MainIRCTC.UnitOfWork;

namespace MainIRCTC.UnitOfWork.Main
{
    public class CustomerUow : BaseUow, ICustomerUow
    {
        public CustomerUow(ICustomerContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface ICustomerUow : ICoreUnitOfWork { }
}


