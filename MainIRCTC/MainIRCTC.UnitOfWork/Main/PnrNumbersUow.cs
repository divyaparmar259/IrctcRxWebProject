using RxWeb.Core.Data;
using MainIRCTC.BoundedContext.Main;

namespace MainIRCTC.UnitOfWork.Main
{
    public class PnrNumbersUow : BaseUow, IPnrNumbersUow
    {
        public PnrNumbersUow(IPnrNumbersContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface IPnrNumbersUow : ICoreUnitOfWork { }
}


