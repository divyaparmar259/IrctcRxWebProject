using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using MainIRCTC.BoundedContext.SqlContext;
namespace MainIRCTC.Models.Main
{
    [Table("vPassengerInvoice",Schema="dbo")]
    public partial class vPassengerInvoice
    {

        public string PassengerName { get; set; }

		#region PassengerAge Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion PassengerAge Annotations

        public int PassengerAge { get; set; }


        public string PassengerGender { get; set; }


        public string PassengerCountry { get; set; }


        public double PaymentAmount { get; set; }


        public int UserId { get; set; }


        public vPassengerInvoice()
        {
        }
	}
}