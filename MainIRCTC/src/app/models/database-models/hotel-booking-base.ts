import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class HotelBookingBase {

//#region hotelBookingId Prop
        @prop()
        hotelBookingId : number;
//#endregion hotelBookingId Prop


//#region userId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        userId : number;
//#endregion userId Prop


//#region hotelId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        hotelId : number;
//#endregion hotelId Prop


//#region userCheckInDate Prop
        @required()
        userCheckInDate : Date;
//#endregion userCheckInDate Prop


//#region userCheckOutDate Prop
        @required()
        userCheckOutDate : Date;
//#endregion userCheckOutDate Prop


//#region totalPrice Prop
        @required()
        totalPrice : any;
//#endregion totalPrice Prop





}