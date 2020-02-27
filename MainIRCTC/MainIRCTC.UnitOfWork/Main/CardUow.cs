using RxWeb.Core.Data;
using MainIRCTC.BoundedContext.Main;

namespace MainIRCTC.UnitOfWork.Main
{
    public class CardUow : BaseUow, ICardUow
    {
        public CardUow(ICardContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface ICardUow : ICoreUnitOfWork { }
}


