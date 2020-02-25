using RxWeb.Core.Data;
using MainIRCTC.BoundedContext.Main;

namespace MainIRCTC.UnitOfWork.Main
{
    public class AdminHotelUow : BaseUow, IAdminHotelUow
    {
        public AdminHotelUow(IAdminHotelContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface IAdminHotelUow : ICoreUnitOfWork { }
}


