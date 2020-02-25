import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class HotelBase {

//#region hotelId Prop
        @prop()
        hotelId : number;
//#endregion hotelId Prop


//#region hotelName Prop
        @required()
        @maxLength({value:50})
        hotelName : string;
//#endregion hotelName Prop


//#region hotelAddress Prop
        @required()
        @maxLength({value:50})
        hotelAddress : string;
//#endregion hotelAddress Prop


//#region hotelPricePerNight Prop
        @required()
        hotelPricePerNight : any;
//#endregion hotelPricePerNight Prop


//#region cityId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        cityId : number;
//#endregion cityId Prop





}