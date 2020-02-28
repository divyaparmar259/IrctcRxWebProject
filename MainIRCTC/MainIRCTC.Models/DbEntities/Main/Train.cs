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
    [Table("Trains",Schema="dbo")]
    public partial class Train
    {
		#region TrainId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion TrainId Annotations

        public int TrainId { get; set; }

		#region TrainName Annotations

        [Required]
        [MaxLength(50)]
		#endregion TrainName Annotations

        public string TrainName { get; set; }

		#region TrainStartingPoint Annotations

        [Required]
        [MaxLength(50)]
		#endregion TrainStartingPoint Annotations

        public string TrainStartingPoint { get; set; }

		#region TrainEndingPoint Annotations

        [Required]
        [MaxLength(50)]
		#endregion TrainEndingPoint Annotations

        public string TrainEndingPoint { get; set; }

		#region TrainArriveTime Annotations

        [Required]
		#endregion TrainArriveTime Annotations

        public TimeSpan TrainArriveTime { get; set; }

		#region TrainDepartTime Annotations

        [Required]
		#endregion TrainDepartTime Annotations

        public TimeSpan TrainDepartTime { get; set; }

		#region TrainFarePerKm Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion TrainFarePerKm Annotations

        public int TrainFarePerKm { get; set; }

		#region Stations Annotations

        [InverseProperty("Train")]
		#endregion Stations Annotations

        public virtual ICollection<Station> Stations { get; set; }

		#region Passengers Annotations

        [InverseProperty("Train")]
		#endregion Passengers Annotations

        public virtual ICollection<Passenger> Passengers { get; set; }

		#region TrainApplicationObjectType Annotations

        [InverseProperty("Train")]
		#endregion TrainApplicationObjectType Annotations

        public virtual ICollection<TrainApplicationObjectType> TrainApplicationObjectType { get; set; }

		#region TrainAvailable Annotations

        [InverseProperty("Train")]
		#endregion TrainAvailable Annotations

        public virtual ICollection<TrainAvailable> TrainAvailable { get; set; }


        public Train()
        {
			Stations = new HashSet<Station>();
			Passengers = new HashSet<Passenger>();
			TrainApplicationObjectType = new HashSet<TrainApplicationObjectType>();
			TrainAvailable = new HashSet<TrainAvailable>();
        }
	}
}