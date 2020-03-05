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
		#endregion UserId Annotations

        public int UserId { get; set; }

		#region PaymentId Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion PaymentId Annotations

        public int PaymentId { get; set; }

		#region PassengerId Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion PassengerId Annotations

        public int PassengerId { get; set; }

		#region PassengerInvoiceId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("PassengerInvoice","dbo","","PassengerInvoiceId")]
		#endregion PassengerInvoiceId Annotations

        public int PassengerInvoiceId { get; set; }

		#region PassengerInvoice Annotations

        [ForeignKey(nameof(PassengerInvoiceId))]
        [InverseProperty(nameof(MainIRCTC.Models.Main.PassengerInvoice.PNRGeneration))]
		#endregion PassengerInvoice Annotations

        public virtual PassengerInvoice PassengerInvoice { get; set; }


        public PNRGeneration()
        {
        }
	}
}