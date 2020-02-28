using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using MainIRCTC.BoundedContext.SqlContext;
namespace MainIRCTC.Models.Main
{
    [Table("vPNR",Schema="dbo")]
    public partial class vPNR
    {
		#region PNRId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion PNRId Annotations

        public int PNRId { get; set; }


        public string PassengerName { get; set; }


        public int PassengerAge { get; set; }


        public string PassengerGender { get; set; }


        public string TrainName { get; set; }


        public vPNR()
        {
        }
	}
}