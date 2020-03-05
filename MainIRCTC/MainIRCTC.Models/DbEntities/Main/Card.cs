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
    [Table("Cards",Schema="dbo")]
    public partial class Card
    {
		#region CardId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion CardId Annotations

        public int CardId { get; set; }

		#region CardExpiryMonth Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion CardExpiryMonth Annotations

        public int CardExpiryMonth { get; set; }

		#region CardExpiryYear Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion CardExpiryYear Annotations

        public int CardExpiryYear { get; set; }

		#region CardCvv Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion CardCvv Annotations

        public int CardCvv { get; set; }

		#region CardNumber Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion CardNumber Annotations

        public int CardNumber { get; set; }

		#region UserId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Customers","dbo","","UserId")]
		#endregion UserId Annotations

        public int UserId { get; set; }

		#region Customer Annotations

        [ForeignKey(nameof(UserId))]
        [InverseProperty(nameof(MainIRCTC.Models.Main.Customer.Cards))]
		#endregion Customer Annotations

        public virtual Customer Customer { get; set; }


        public Card()
        {
        }
	}
}