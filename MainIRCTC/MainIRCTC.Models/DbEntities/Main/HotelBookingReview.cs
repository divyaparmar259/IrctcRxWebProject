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
    [Table("HotelBookingReview",Schema="dbo")]
    public partial class HotelBookingReview
    {
		#region HotelBookigReviewId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion HotelBookigReviewId Annotations

        public int HotelBookigReviewId { get; set; }

		#region UserId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Customers","dbo","","UserId")]
		#endregion UserId Annotations

        public int UserId { get; set; }

		#region HotelBookigReviewTotalPrice Annotations

        [Required]
		#endregion HotelBookigReviewTotalPrice Annotations

        public double HotelBookigReviewTotalPrice { get; set; }

		#region HotelBookingId Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion HotelBookingId Annotations

        public int HotelBookingId { get; set; }

		#region Customer Annotations

        [ForeignKey(nameof(UserId))]
        [InverseProperty(nameof(MainIRCTC.Models.Main.Customer.HotelBookingReview))]
		#endregion Customer Annotations

        public virtual Customer Customer { get; set; }


        public HotelBookingReview()
        {
        }
	}
}