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
    [Table("SearchTrainResult",Schema="dbo")]
    public partial class SearchTrainResult
    {
		#region SearchTrainId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion SearchTrainId Annotations

        public int SearchTrainId { get; set; }

		#region StationSP Annotations

        [Required]
        [MaxLength(50)]
		#endregion StationSP Annotations

        public string StationSP { get; set; }

		#region StationEP Annotations

        [Required]
        [MaxLength(50)]
		#endregion StationEP Annotations

        public string StationEP { get; set; }

		#region day Annotations

        [Required]
        [MaxLength(50)]
		#endregion day Annotations

        public string day { get; set; }

		#region Classname Annotations

        [Required]
        [MaxLength(50)]
		#endregion Classname Annotations

        public string Classname { get; set; }

		#region Totalcount Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion Totalcount Annotations

        public int Totalcount { get; set; }

		#region UserId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Customers","dbo","","UserId")]
		#endregion UserId Annotations

        public int UserId { get; set; }

		#region Customer Annotations

        [ForeignKey(nameof(UserId))]
        [InverseProperty(nameof(MainIRCTC.Models.Main.Customer.SearchTrainResult))]
		#endregion Customer Annotations

        public virtual Customer Customer { get; set; }


        public SearchTrainResult()
        {
        }
	}
}