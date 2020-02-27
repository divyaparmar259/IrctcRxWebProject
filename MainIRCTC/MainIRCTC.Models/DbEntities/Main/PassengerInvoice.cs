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
    [Table("PassengerInvoice",Schema="dbo")]
    public partial class PassengerInvoice
    {
		#region PassengerInvoiceCount Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion PassengerInvoiceCount Annotations

        public int PassengerInvoiceCount { get; set; }

		#region UserId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Customers","dbo","","UserId")]
		#endregion UserId Annotations

        public int UserId { get; set; }

		#region PassengerInvoiceId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion PassengerInvoiceId Annotations

        public int PassengerInvoiceId { get; set; }

		#region Customer Annotations

        [ForeignKey(nameof(UserId))]
        [InverseProperty(nameof(MainIRCTC.Models.Main.Customer.PassengerInvoice))]
		#endregion Customer Annotations

        public virtual Customer Customer { get; set; }


        public PassengerInvoice()
        {
        }
	}
}