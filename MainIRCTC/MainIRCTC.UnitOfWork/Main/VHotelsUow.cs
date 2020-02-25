using RxWeb.Core.Data;
using MainIRCTC.BoundedContext.Main;

namespace MainIRCTC.UnitOfWork.Main
{
    public class VHotelsUow : BaseUow, IVHotelsUow
    {
        public VHotelsUow(IVHotelsContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface IVHotelsUow : ICoreUnitOfWork { }
}


