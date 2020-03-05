import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vPassengerInvoiceBase {

//#region passengerName Prop
        @gridColumn({visible: true, columnIndex:0, allowSorting: true, headerKey: 'passengerName', keyColumn: false})
        passengerName : string;
//#endregion passengerName Prop


//#region passengerAge Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'passengerAge', keyColumn: true})
        passengerAge : number;
//#endregion passengerAge Prop


//#region passengerGender Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'passengerGender', keyColumn: false})
        passengerGender : string;
//#endregion passengerGender Prop


//#region passengerCountry Prop
        @gridColumn({visible: true, columnIndex:3, allowSorting: true, headerKey: 'passengerCountry', keyColumn: false})
        passengerCountry : string;
//#endregion passengerCountry Prop


//#region paymentAmount Prop
        @gridColumn({visible: true, columnIndex:4, allowSorting: true, headerKey: 'paymentAmount', keyColumn: false})
        paymentAmount : any;
//#endregion paymentAmount Prop


//#region userId Prop
        @gridColumn({visible: true, columnIndex:5, allowSorting: true, headerKey: 'userId', keyColumn: false})
        userId : number;
//#endregion userId Prop

}