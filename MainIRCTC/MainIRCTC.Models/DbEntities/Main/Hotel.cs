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
    [Table("Hotels",Schema="dbo")]
    public partial class Hotel
    {
		#region HotelId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion HotelId Annotations

        public int HotelId { get; set; }

		#region HotelName Annotations

        [Required]
        [MaxLength(50)]
		#endregion HotelName Annotations

        public string HotelName { get; set; }

		#region HotelAddress Annotations

        [Required]
        [MaxLength(50)]
		#endregion HotelAddress Annotations

        public string HotelAddress { get; set; }

		#region HotelPricePerNight Annotations

        [Required]
		#endregion HotelPricePerNight Annotations

        public double HotelPricePerNight { get; set; }

		#region CityId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Cities","dbo","","CityId")]
		#endregion CityId Annotations

        public int CityId { get; set; }

		#region City Annotations

        [ForeignKey(nameof(CityId))]
        [InverseProperty(nameof(MainIRCTC.Models.Main.City.Hotels))]
		#endregion City Annotations

        public virtual City City { get; set; }

		#region HotelBooking Annotations

        [InverseProperty("Hotel")]
		#endregion HotelBooking Annotations

        public virtual ICollection<HotelBooking> HotelBooking { get; set; }


        public Hotel()
        {
			HotelBooking = new HashSet<HotelBooking>();
        }
	}
}