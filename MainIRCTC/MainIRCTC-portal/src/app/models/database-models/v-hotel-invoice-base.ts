import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vHotelInvoiceBase {

//#region userCheckInDate Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'userCheckInDate', keyColumn: false})
        userCheckInDate : any;
//#endregion userCheckInDate Prop


//#region userCheckOutDate Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'userCheckOutDate', keyColumn: false})
        userCheckOutDate : any;
//#endregion userCheckOutDate Prop


//#region totalPrice Prop
        @gridColumn({visible: true, columnIndex:3, allowSorting: true, headerKey: 'totalPrice', keyColumn: false})
        totalPrice : any;
//#endregion totalPrice Prop


//#region hotelName Prop
        @gridColumn({visible: true, columnIndex:4, allowSorting: true, headerKey: 'hotelName', keyColumn: false})
        hotelName : string;
//#endregion hotelName Prop


//#region hotelAddress Prop
        @gridColumn({visible: true, columnIndex:5, allowSorting: true, headerKey: 'hotelAddress', keyColumn: false})
        hotelAddress : string;
//#endregion hotelAddress Prop


//#region hotelPricePerNight Prop
        @gridColumn({visible: true, columnIndex:6, allowSorting: true, headerKey: 'hotelPricePerNight', keyColumn: false})
        hotelPricePerNight : any;
//#endregion hotelPricePerNight Prop


//#region hotelBookingId Prop
        @gridColumn({visible: true, columnIndex:7, allowSorting: true, headerKey: 'hotelBookingId', keyColumn: true})
        hotelBookingId : number;
//#endregion hotelBookingId Prop

}