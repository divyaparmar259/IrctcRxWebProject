import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class HotelBookingReviewBase {

//#region hotelBookigReviewId Prop
        @prop()
        hotelBookigReviewId : number;
//#endregion hotelBookigReviewId Prop


//#region userId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        userId : number;
//#endregion userId Prop


//#region hotelBookigReviewTotalPrice Prop
        @required()
        hotelBookigReviewTotalPrice : any;
//#endregion hotelBookigReviewTotalPrice Prop


//#region hotelBookingId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        hotelBookingId : number;
//#endregion hotelBookingId Prop



}