using Microsoft.AspNetCore.Mvc;
using System.Linq;
using MainIRCTC.UnitOfWork.Main;
using MainIRCTC.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace MainIRCTC.Api.Controllers.AdminTrainModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class TrainApplicationObjectTypeController : BaseController<TrainApplicationObjectType,TrainApplicationObjectType,TrainApplicationObjectType>

    {
        public TrainApplicationObjectTypeController(IAdminTrainUow uow):base(uow) {}

    }
}
