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
    [Table("EWallet",Schema="dbo")]
    public partial class EWallet
    {
		#region EWalletId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion EWalletId Annotations

        public int EWalletId { get; set; }

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

		#region EWalletBalance Annotations

        [Required]
		#endregion EWalletBalance Annotations

        public double EWalletBalance { get; set; }

		#region Customer Annotations

        [ForeignKey(nameof(UserId))]
        [InverseProperty(nameof(MainIRCTC.Models.Main.Customer.EWallet))]
		#endregion Customer Annotations

        public virtual Customer Customer { get; set; }


        public EWallet()
        {
        }
	}
}