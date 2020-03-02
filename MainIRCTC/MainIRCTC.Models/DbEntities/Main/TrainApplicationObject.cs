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
    [Table("TrainApplicationObject",Schema="dbo")]
    public partial class TrainApplicationObject
    {
		#region TrainApplicationObjectId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion TrainApplicationObjectId Annotations

        public int TrainApplicationObjectId { get; set; }

		#region TrainApplicationObjectTypeId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("TrainApplicationObjectType","dbo","","TrainApplicationObjectTypeId")]
		#endregion TrainApplicationObjectTypeId Annotations

        public int TrainApplicationObjectTypeId { get; set; }

		#region TrainApplicationObjectClassName Annotations

        [Required]
        [MaxLength(50)]
		#endregion TrainApplicationObjectClassName Annotations

        public string TrainApplicationObjectClassName { get; set; }

		#region TrainApplicationObjectFare Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion TrainApplicationObjectFare Annotations

        public int TrainApplicationObjectFare { get; set; }

		#region TrainApplicationObjectType Annotations

        [ForeignKey(nameof(TrainApplicationObjectTypeId))]
        [InverseProperty(nameof(MainIRCTC.Models.Main.TrainApplicationObjectType.TrainApplicationObject))]
		#endregion TrainApplicationObjectType Annotations

        public virtual TrainApplicationObjectType TrainApplicationObjectType { get; set; }


        public TrainApplicationObject()
        {
        }
	}
}