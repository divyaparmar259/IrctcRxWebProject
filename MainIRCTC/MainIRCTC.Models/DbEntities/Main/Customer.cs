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
    [Table("Customers",Schema="dbo")]
    public partial class Customer
    {
		#region UserId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion UserId Annotations

        public int UserId { get; set; }

		#region UserName Annotations

        [Required]
        [MaxLength(50)]
		#endregion UserName Annotations

        public string UserName { get; set; }

		#region Password Annotations

        [Required]
        [MaxLength(50)]
		#endregion Password Annotations

        public string Password { get; set; }

		#region FullName Annotations

        [Required]
        [MaxLength(50)]
		#endregion FullName Annotations

        public string FullName { get; set; }

		#region Gender Annotations

        [Required]
        [MaxLength(50)]
		#endregion Gender Annotations

        public string Gender { get; set; }


        public Nullable<System.DateTime> UserDob { get; set; }

		#region Country Annotations

        [Required]
        [MaxLength(50)]
		#endregion Country Annotations

        public string Country { get; set; }

		#region Email Annotations

        [Required]
        [MaxLength(50)]
		#endregion Email Annotations

        public string Email { get; set; }

		#region MobileNumber Annotations

        [Required]
        [MaxLength(50)]
		#endregion MobileNumber Annotations

        public string MobileNumber { get; set; }

		#region Address Annotations

        [Required]
        [MaxLength(100)]
		#endregion Address Annotations

        public string Address { get; set; }

		#region PinCode Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion PinCode Annotations

        public int PinCode { get; set; }

		#region AadharCardNumber Annotations

        [Required]
		#endregion AadharCardNumber Annotations

        public long AadharCardNumber { get; set; }

		#region EWallet Annotations

        [InverseProperty("Customer")]
		#endregion EWallet Annotations

        public virtual ICollection<EWallet> EWallet { get; set; }

		#region HotelBooking Annotations

        [InverseProperty("Customer")]
		#endregion HotelBooking Annotations

        public virtual ICollection<HotelBooking> HotelBooking { get; set; }

		#region HotelBookingReview Annotations

        [InverseProperty("Customer")]
		#endregion HotelBookingReview Annotations

        public virtual ICollection<HotelBookingReview> HotelBookingReview { get; set; }

		#region Passengers Annotations

        [InverseProperty("Customer")]
		#endregion Passengers Annotations

        public virtual ICollection<Passenger> Passengers { get; set; }

		#region Payment Annotations

        [InverseProperty("Customer")]
		#endregion Payment Annotations

        public virtual ICollection<Payment> Payment { get; set; }

		#region PassengerInvoice Annotations

        [InverseProperty("Customer")]
		#endregion PassengerInvoice Annotations

        public virtual ICollection<PassengerInvoice> PassengerInvoice { get; set; }

		#region Cards Annotations

        [InverseProperty("Customer")]
		#endregion Cards Annotations

        public virtual ICollection<Card> Cards { get; set; }


        public Customer()
        {
			EWallet = new HashSet<EWallet>();
			HotelBooking = new HashSet<HotelBooking>();
			HotelBookingReview = new HashSet<HotelBookingReview>();
			Passengers = new HashSet<Passenger>();
			Payment = new HashSet<Payment>();
			PassengerInvoice = new HashSet<PassengerInvoice>();
			Cards = new HashSet<Card>();
        }
	}
}