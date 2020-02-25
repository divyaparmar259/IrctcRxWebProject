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
    [Table("TrainAvailable",Schema="dbo")]
    public partial class TrainAvailable
    {
		#region TrainAvailableId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion TrainAvailableId Annotations

        public int TrainAvailableId { get; set; }

		#region TrainId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Trains","dbo","","TrainId")]
		#endregion TrainId Annotations

        public int TrainId { get; set; }

		#region TrainAvailableDay Annotations

        [Required]
        [MaxLength(50)]
		#endregion TrainAvailableDay Annotations

        public string TrainAvailableDay { get; set; }

		#region Train Annotations

        [ForeignKey(nameof(TrainId))]
        [InverseProperty(nameof(MainIRCTC.Models.Main.Train.TrainAvailable))]
		#endregion Train Annotations

        public virtual Train Train { get; set; }


        public TrainAvailable()
        {
        }
	}
}