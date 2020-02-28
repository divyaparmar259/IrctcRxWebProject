import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vPassengerInvoiceBase {

//#region passengerName Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'passengerName', keyColumn: false})
        passengerName : string;
//#endregion passengerName Prop


//#region passengerAge Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'passengerAge', keyColumn: true})
        passengerAge : number;
//#endregion passengerAge Prop


//#region stationSP Prop
        @gridColumn({visible: true, columnIndex:3, allowSorting: true, headerKey: 'stationSP', keyColumn: false})
        stationSP : string;
//#endregion stationSP Prop


//#region stationEP Prop
        @gridColumn({visible: true, columnIndex:4, allowSorting: true, headerKey: 'stationEP', keyColumn: false})
        stationEP : string;
//#endregion stationEP Prop


//#region day Prop
        @gridColumn({visible: true, columnIndex:5, allowSorting: true, headerKey: 'day', keyColumn: false})
        day : string;
//#endregion day Prop


//#region class Prop
        @gridColumn({visible: true, columnIndex:6, allowSorting: true, headerKey: 'class', keyColumn: false})
        class : string;
//#endregion class Prop


//#region tcount Prop
        @gridColumn({visible: true, columnIndex:7, allowSorting: true, headerKey: 'tcount', keyColumn: false})
        tcount : number;
//#endregion tcount Prop


//#region passengerId Prop
        @gridColumn({visible: true, columnIndex:8, allowSorting: true, headerKey: 'passengerId', keyColumn: false})
        passengerId : number;
//#endregion passengerId Prop


//#region userId Prop
        @gridColumn({visible: true, columnIndex:9, allowSorting: true, headerKey: 'userId', keyColumn: false})
        userId : number;
//#endregion userId Prop

}