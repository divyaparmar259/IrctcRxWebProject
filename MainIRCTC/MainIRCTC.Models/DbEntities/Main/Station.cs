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
    [Table("Stations",Schema="dbo")]
    public partial class Station
    {
		#region StationId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion StationId Annotations

        public int StationId { get; set; }

		#region TrainId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Trains","dbo","","TrainId")]
		#endregion TrainId Annotations

        public int TrainId { get; set; }

		#region StationStartingPoint Annotations

        [Required]
        [MaxLength(50)]
		#endregion StationStartingPoint Annotations

        public string StationStartingPoint { get; set; }

		#region StationEndingPoint Annotations

        [Required]
        [MaxLength(50)]
		#endregion StationEndingPoint Annotations

        public string StationEndingPoint { get; set; }

		#region StationDistance Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion StationDistance Annotations

        public int StationDistance { get; set; }

		#region Train Annotations

        [ForeignKey(nameof(TrainId))]
        [InverseProperty(nameof(MainIRCTC.Models.Main.Train.Stations))]
		#endregion Train Annotations

        public virtual Train Train { get; set; }

		#region StationDetails Annotations

        [InverseProperty("Station")]
		#endregion StationDetails Annotations

        public virtual ICollection<StationDetail> StationDetails { get; set; }


        public Station()
        {
			StationDetails = new HashSet<StationDetail>();
        }
	}
}