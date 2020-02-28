using RxWeb.Core.Data;
using MainIRCTC.BoundedContext.Main;
using MainIRCTC.UnitOfWork;

namespace MainIRCTC.UnitOfWork.Main
{
    public class EwalletUow : BaseUow, IEwalletUow
    {
        public EwalletUow(IEwalletContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface IEwalletUow : ICoreUnitOfWork { }
}


