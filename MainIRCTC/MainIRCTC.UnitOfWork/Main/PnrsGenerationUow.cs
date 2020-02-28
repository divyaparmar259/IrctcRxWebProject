using RxWeb.Core.Data;
using MainIRCTC.BoundedContext.Main;
using MainIRCTC.UnitOfWork;

namespace MainIRCTC.UnitOfWork.Main
{
    public class PnrsGenerationUow : BaseUow, IPnrsGenerationUow
    {
        public PnrsGenerationUow(IPnrsGenerationContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface IPnrsGenerationUow : ICoreUnitOfWork { }
}


