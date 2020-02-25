import {CustomerBase} from '../database-models/customer-base';
import {EWalletBase} from '../database-models/e-wallet-base';
import {HotelBookingBase} from '../database-models/hotel-booking-base';
import {HotelBookingReviewBase} from '../database-models/hotel-booking-review-base';
import {PassengerBase} from '../database-models/passenger-base';
import {PaymentBase} from '../database-models/payment-base';
import {PNRGenerationBase} from '../database-models/p-n-r-generation-base';
//Generated Imports
export class Customer extends CustomerBase 
{




//#region Generated Reference Properties
//#region eWallet Prop
        eWallet : EWalletBase[];
//#endregion eWallet Prop

//#region hotelBooking Prop
        hotelBooking : HotelBookingBase[];
//#endregion hotelBooking Prop

//#region hotelBookingReview Prop
        hotelBookingReview : HotelBookingReviewBase[];
//#endregion hotelBookingReview Prop

//#region passengers Prop
        passengers : PassengerBase[];
//#endregion passengers Prop

//#region payment Prop
        payment : PaymentBase[];
//#endregion payment Prop

//#region pNRGeneration Prop
        pNRGeneration : PNRGenerationBase[];
//#endregion pNRGeneration Prop

//#endregion Generated Reference Properties
}