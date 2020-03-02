using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using MainIRCTC.Models.Enums.Main;
using MainIRCTC.BoundedContext.SqlContext;
namespace MainIRCTC.Models.Main
{
    [Table("BookTrainResult",Schema="dbo")]
    public partial class BookTrainResult
    {
		#region BookTrainId Annotations

        [Required]
        [MaxLength(10)]
		#endregion BookTrainId Annotations

        public string BookTrainId { get; set; }

		#region UserId Annotations

        [Required]
        [MaxLength(10)]
		#endregion UserId Annotations

        public string UserId { get; set; }

		#region TrainName Annotations

        [Required]
        [MaxLength(50)]
		#endregion TrainName Annotations

        public string TrainName { get; set; }

		#region StationStartingPoint Annotations

        [Required]
        [MaxLength(50)]
		#endregion StationStartingPoint Annotations

        public string StationStartingPoint { get; set; }

		#region StationEndingPoint Annotations

        [Required]
        [MaxLength(50)]
		#endregion StationEndingPoint Annotations

        public string StationEndingPoint { get; set; }

		#region StationArriveTime Annotations

        [Required]
        [MaxLength(50)]
		#endregion StationArriveTime Annotations

        public string StationArriveTime { get; set; }

		#region StationDepartTime Annotations

        [Required]
        [MaxLength(50)]
		#endregion StationDepartTime Annotations

        public string StationDepartTime { get; set; }

		#region TrainObjectTypeName Annotations

        [Required]
        [MaxLength(50)]
		#endregion TrainObjectTypeName Annotations

        public string TrainObjectTypeName { get; set; }

		#region TrainAvailableDay Annotations

        [Required]
        [MaxLength(50)]
		#endregion TrainAvailableDay Annotations

        public string TrainAvailableDay { get; set; }

		#region TrainApplicationObjectClassName Annotations

        [Required]
        [MaxLength(50)]
		#endregion TrainApplicationObjectClassName Annotations

        public string TrainApplicationObjectClassName { get; set; }

		#region data Annotations

        [Required]
        [MaxLength(50)]
		#endregion data Annotations

        public string data { get; set; }


        public BookTrainResult()
        {
        }
	}
}