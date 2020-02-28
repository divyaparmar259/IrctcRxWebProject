using RxWeb.Core.Data;
using MainIRCTC.BoundedContext.Main;
using MainIRCTC.UnitOfWork;

namespace MainIRCTC.UnitOfWork.Main
{
    public class CancellationUow : BaseUow, ICancellationUow
    {
        public CancellationUow(ICancellationContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface ICancellationUow : ICoreUnitOfWork { }
}


