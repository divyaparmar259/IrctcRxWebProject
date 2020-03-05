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
    [Table("HotelBooking",Schema="dbo")]
    public partial class HotelBooking
    {
		#region HotelBookingId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion HotelBookingId Annotations

        public int HotelBookingId { get; set; }

		#region UserId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Customers","dbo","","UserId")]
		#endregion UserId Annotations

        public int UserId { get; set; }

		#region HotelId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Hotels","dbo","","HotelId")]
		#endregion HotelId Annotations

        public int HotelId { get; set; }

		#region UserCheckInDate Annotations

        [Required]
		#endregion UserCheckInDate Annotations

        public System.DateTimeOffset UserCheckInDate { get; set; }

		#region UserCheckOutDate Annotations

        [Required]
		#endregion UserCheckOutDate Annotations

        public System.DateTimeOffset UserCheckOutDate { get; set; }

		#region TotalPrice Annotations

        [Required]
		#endregion TotalPrice Annotations

        public double TotalPrice { get; set; }

		#region Customer Annotations

        [ForeignKey(nameof(UserId))]
        [InverseProperty(nameof(MainIRCTC.Models.Main.Customer.HotelBooking))]
		#endregion Customer Annotations

        public virtual Customer Customer { get; set; }

		#region Hotel Annotations

        [ForeignKey(nameof(HotelId))]
        [InverseProperty(nameof(MainIRCTC.Models.Main.Hotel.HotelBooking))]
		#endregion Hotel Annotations

        public virtual Hotel Hotel { get; set; }


        public HotelBooking()
        {
        }
	}
}