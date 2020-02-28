using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using MainIRCTC.BoundedContext.SqlContext;
namespace MainIRCTC.Models.Main
{
    [Table("vSearchTrain",Schema="dbo")]
    public partial class vSearchTrain
    {

        public string TrainName { get; set; }


        public string StationStartingPoint { get; set; }


        public string StationEndingPoint { get; set; }


        public TimeSpan StationArriveTime { get; set; }


        public TimeSpan StationDepartTime { get; set; }


        public string TrainObjectTypeName { get; set; }


        public string TrainAvailableDay { get; set; }


        public string TrainApplicationObjectClassName { get; set; }

		#region StationDistance Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion StationDistance Annotations

        public int StationDistance { get; set; }


        public int TrainFarePerKm { get; set; }


        public int TrainApplicationObjectFare { get; set; }


        public vSearchTrain()
        {
        }
	}
}