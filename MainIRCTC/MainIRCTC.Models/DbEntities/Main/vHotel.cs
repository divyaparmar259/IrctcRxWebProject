using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using MainIRCTC.BoundedContext.SqlContext;
namespace MainIRCTC.Models.Main
{
    [Table("vHotels",Schema="dbo")]
    public partial class vHotel
    {

        public string CityName { get; set; }

		#region HotelId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion HotelId Annotations

        public int HotelId { get; set; }


        public string HotelName { get; set; }


        public string HotelAddress { get; set; }


        public double HotelPricePerNight { get; set; }


        public int CityId { get; set; }


        public vHotel()
        {
        }
	}
}