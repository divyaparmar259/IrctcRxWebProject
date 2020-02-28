using RxWeb.Core.Data;
using MainIRCTC.BoundedContext.Main;

namespace MainIRCTC.UnitOfWork.Main
{
    public class TrainUow : BaseUow, ITrainUow
    {
        public TrainUow(ITrainContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface ITrainUow : ICoreUnitOfWork { }
}


