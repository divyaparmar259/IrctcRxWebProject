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
    [Table("PNRGeneration",Schema="dbo")]
    public partial class PNRGeneration
    {
		#region PNRId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion PNRId Annotations

        public int PNRId { get; set; }

		#region UserId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Customers","dbo","","UserId")]
		#endregion UserId Annotations

        public int UserId { get; set; }

		#region PaymentId Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion PaymentId Annotations

        public int PaymentId { get; set; }

		#region Customer Annotations

        [ForeignKey(nameof(UserId))]
        [InverseProperty(nameof(MainIRCTC.Models.Main.Customer.PNRGeneration))]
		#endregion Customer Annotations

        public virtual Customer Customer { get; set; }


        public PNRGeneration()
        {
        }
	}
}