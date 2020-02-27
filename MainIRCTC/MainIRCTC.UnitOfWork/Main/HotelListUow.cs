using RxWeb.Core.Data;
using MainIRCTC.BoundedContext.Main;

namespace MainIRCTC.UnitOfWork.Main
{
    public class HotelListUow : BaseUow, IHotelListUow
    {
        public HotelListUow(IHotelListContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface IHotelListUow : ICoreUnitOfWork { }
}


