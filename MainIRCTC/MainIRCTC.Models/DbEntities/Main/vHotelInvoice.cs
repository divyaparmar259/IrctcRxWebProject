using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using MainIRCTC.BoundedContext.SqlContext;
namespace MainIRCTC.Models.Main
{
    [Table("vHotelInvoice",Schema="dbo")]
    public partial class vHotelInvoice
    {

        public System.DateTime UserCheckInDate { get; set; }


        public System.DateTime UserCheckOutDate { get; set; }


        public double TotalPrice { get; set; }


        public string HotelName { get; set; }


        public string HotelAddress { get; set; }


        public double HotelPricePerNight { get; set; }

		#region HotelBookingId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion HotelBookingId Annotations

        public int HotelBookingId { get; set; }


        public vHotelInvoice()
        {
        }
	}
}