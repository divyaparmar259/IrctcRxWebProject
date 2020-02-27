using RxWeb.Core.Data;
using MainIRCTC.BoundedContext.Main;

namespace MainIRCTC.UnitOfWork.Main
{
    public class HotelInvoiceUow : BaseUow, IHotelInvoiceUow
    {
        public HotelInvoiceUow(IHotelInvoiceContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface IHotelInvoiceUow : ICoreUnitOfWork { }
}


