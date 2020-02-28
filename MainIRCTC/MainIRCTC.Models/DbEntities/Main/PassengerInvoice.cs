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
		#region passengerInvoiceId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion passengerInvoiceId Annotations

        public int passengerInvoiceId { get; set; }

		#region userId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Customers","dbo","","userId")]
		#endregion userId Annotations

        public int userId { get; set; }

		#region TotalPrice Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion TotalPrice Annotations

        public int TotalPrice { get; set; }

		#region NumberOfPassengers Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion NumberOfPassengers Annotations

        public int NumberOfPassengers { get; set; }

		#region Customer Annotations

        [ForeignKey(nameof(userId))]
        [InverseProperty(nameof(MainIRCTC.Models.Main.Customer.PassengerInvoice))]
		#endregion Customer Annotations

        public virtual Customer Customer { get; set; }

		#region PNRGeneration Annotations

        [InverseProperty("PassengerInvoice")]
		#endregion PNRGeneration Annotations

        public virtual ICollection<PNRGeneration> PNRGeneration { get; set; }


        public PassengerInvoice()
        {
			PNRGeneration = new HashSet<PNRGeneration>();
        }
	}
}