using RxWeb.Core.Data;
using MainIRCTC.BoundedContext.Main;

namespace MainIRCTC.UnitOfWork.Main
{
    public class HotelBookingUow : BaseUow, IHotelBookingUow
    {
        public HotelBookingUow(IHotelBookingContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface IHotelBookingUow : ICoreUnitOfWork { }
}


