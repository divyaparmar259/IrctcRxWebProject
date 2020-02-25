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
    [Table("StationDetails",Schema="dbo")]
    public partial class StationDetail
    {
		#region StationDeatilId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion StationDeatilId Annotations

        public int StationDeatilId { get; set; }

		#region StationId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Stations","dbo","","StationId")]
		#endregion StationId Annotations

        public int StationId { get; set; }

		#region StationArriveTime Annotations

        [Required]
		#endregion StationArriveTime Annotations

        public TimeSpan StationArriveTime { get; set; }

		#region StationDepartTime Annotations

        [Required]
		#endregion StationDepartTime Annotations

        public TimeSpan StationDepartTime { get; set; }

		#region Station Annotations

        [ForeignKey(nameof(StationId))]
        [InverseProperty(nameof(MainIRCTC.Models.Main.Station.StationDetails))]
		#endregion Station Annotations

        public virtual Station Station { get; set; }


        public StationDetail()
        {
        }
	}
}