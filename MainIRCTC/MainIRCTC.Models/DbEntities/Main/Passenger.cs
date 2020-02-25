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
    [Table("Passengers",Schema="dbo")]
    public partial class Passenger
    {
		#region PassengerId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion PassengerId Annotations

        public int PassengerId { get; set; }

		#region UserId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Customers","dbo","","UserId")]
		#endregion UserId Annotations

        public int UserId { get; set; }

		#region PassengerName Annotations

        [Required]
        [MaxLength(50)]
		#endregion PassengerName Annotations

        public string PassengerName { get; set; }

		#region PassengerAge Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion PassengerAge Annotations

        public int PassengerAge { get; set; }

		#region PassengerGender Annotations

        [Required]
        [MaxLength(10)]
		#endregion PassengerGender Annotations

        public string PassengerGender { get; set; }

		#region PassengerCountry Annotations

        [Required]
        [MaxLength(50)]
		#endregion PassengerCountry Annotations

        public string PassengerCountry { get; set; }

		#region TrainId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Trains","dbo","","TrainId")]
		#endregion TrainId Annotations

        public int TrainId { get; set; }

		#region Customer Annotations

        [ForeignKey(nameof(UserId))]
        [InverseProperty(nameof(MainIRCTC.Models.Main.Customer.Passengers))]
		#endregion Customer Annotations

        public virtual Customer Customer { get; set; }

		#region Train Annotations

        [ForeignKey(nameof(TrainId))]
        [InverseProperty(nameof(MainIRCTC.Models.Main.Train.Passengers))]
		#endregion Train Annotations

        public virtual Train Train { get; set; }


        public Passenger()
        {
        }
	}
}