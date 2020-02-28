using RxWeb.Core.Data;
using MainIRCTC.BoundedContext.Main;
using MainIRCTC.UnitOfWork;

namespace MainIRCTC.UnitOfWork.Main
{
    public class BookPassengerUow : BaseUow, IBookPassengerUow
    {
        public BookPassengerUow(IBookPassengerContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface IBookPassengerUow : ICoreUnitOfWork { }
}


