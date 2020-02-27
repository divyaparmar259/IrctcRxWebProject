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
    [Table("Payment",Schema="dbo")]
    public partial class Payment
    {
		#region PaymentId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion PaymentId Annotations

        public int PaymentId { get; set; }

		#region PaymentAmount Annotations

        [Required]
		#endregion PaymentAmount Annotations

        public double PaymentAmount { get; set; }

		#region PaymentDate Annotations

        [Required]
		#endregion PaymentDate Annotations

        public System.DateTime PaymentDate { get; set; }

		#region UserId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Customers","dbo","","UserId")]
		#endregion UserId Annotations

        public int UserId { get; set; }

		#region Customer Annotations

        [ForeignKey(nameof(UserId))]
        [InverseProperty(nameof(MainIRCTC.Models.Main.Customer.Payment))]
		#endregion Customer Annotations

        public virtual Customer Customer { get; set; }


        public Payment()
        {
        }
	}
}