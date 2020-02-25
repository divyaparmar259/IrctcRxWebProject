import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vHotelBase {

//#region cityName Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'cityName', keyColumn: false})
        cityName : string;
//#endregion cityName Prop


//#region hotelName Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'hotelName', keyColumn: false})
        hotelName : string;
//#endregion hotelName Prop


//#region hotelAddress Prop
        @gridColumn({visible: true, columnIndex:3, allowSorting: true, headerKey: 'hotelAddress', keyColumn: false})
        hotelAddress : string;
//#endregion hotelAddress Prop


//#region hotelPricePerNight Prop
        @gridColumn({visible: true, columnIndex:4, allowSorting: true, headerKey: 'hotelPricePerNight', keyColumn: false})
        hotelPricePerNight : any;
//#endregion hotelPricePerNight Prop

}