using RxWeb.Core.Data;
using MainIRCTC.BoundedContext.Main;
using MainIRCTC.UnitOfWork;

namespace MainIRCTC.UnitOfWork.Main
{
    public class PNRUow : BaseUow, IPNRUow
    {
        public PNRUow(IPNRContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface IPNRUow : ICoreUnitOfWork { }
}


