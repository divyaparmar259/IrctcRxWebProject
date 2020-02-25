using RxWeb.Core.Data;
using MainIRCTC.BoundedContext.Main;

namespace MainIRCTC.UnitOfWork.Main
{
    public class AdminTrainUow : BaseUow, IAdminTrainUow
    {
        public AdminTrainUow(IAdminTrainContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface IAdminTrainUow : ICoreUnitOfWork { }
}


