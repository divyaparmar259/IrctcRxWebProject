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
    [Table("Cities",Schema="dbo")]
    public partial class City
    {
		#region CitiId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion CitiId Annotations

        public int CitiId { get; set; }

		#region CityName Annotations

        [Required]
        [MaxLength(50)]
		#endregion CityName Annotations

        public string CityName { get; set; }

		#region Hotels Annotations

        [InverseProperty("City")]
		#endregion Hotels Annotations

        public virtual ICollection<Hotel> Hotels { get; set; }


        public City()
        {
			Hotels = new HashSet<Hotel>();
        }
	}
}