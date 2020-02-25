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
    [Table("TrainApplicationObjectType",Schema="dbo")]
    public partial class TrainApplicationObjectType
    {
		#region TrainApplicationObjectTypeId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion TrainApplicationObjectTypeId Annotations

        public int TrainApplicationObjectTypeId { get; set; }

		#region TrainId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Trains","dbo","","TrainId")]
		#endregion TrainId Annotations

        public int TrainId { get; set; }

		#region TrainObjectTypeName Annotations

        [Required]
        [MaxLength(50)]
		#endregion TrainObjectTypeName Annotations

        public string TrainObjectTypeName { get; set; }

		#region Train Annotations

        [ForeignKey(nameof(TrainId))]
        [InverseProperty(nameof(MainIRCTC.Models.Main.Train.TrainApplicationObjectType))]
		#endregion Train Annotations

        public virtual Train Train { get; set; }

		#region TrainApplicationObject Annotations

        [InverseProperty("TrainApplicationObjectType")]
		#endregion TrainApplicationObject Annotations

        public virtual ICollection<TrainApplicationObject> TrainApplicationObject { get; set; }


        public TrainApplicationObjectType()
        {
			TrainApplicationObject = new HashSet<TrainApplicationObject>();
        }
	}
}