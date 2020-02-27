import {CustomerBase} from '../database-models/customer-base';
import {EWalletBase} from '../database-models/e-wallet-base';
import {PassengerBase} from '../database-models/passenger-base';
import {PNRGenerationBase} from '../database-models/p-n-r-generation-base';
import {HotelBookingBase} from '../database-models/hotel-booking-base';
import {PaymentBase} from '../database-models/payment-base';
import {PassengerInvoiceBase} from '../database-models/passenger-invoice-base';
//Generated Imports
export class Customer extends CustomerBase 
{




//#region Generated Reference Properties
//#region eWallet Prop
eWallet : EWalletBase[];
//#endregion eWallet Prop
//#region passengers Prop
passengers : PassengerBase[];
//#endregion passengers Prop
//#region pNRGeneration Prop
pNRGeneration : PNRGenerationBase[];
//#endregion pNRGeneration Prop
//#region hotelBooking Prop
hotelBooking : HotelBookingBase[];
//#endregion hotelBooking Prop
//#region payment Prop
payment : PaymentBase[];
//#endregion payment Prop
//#region passengerInvoice Prop
passengerInvoice : PassengerInvoiceBase[];
//#endregion passengerInvoice Prop

//#endregion Generated Reference Properties




}