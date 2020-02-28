import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vPNRBase {

//#region pNRId Prop
        @gridColumn({visible: true, columnIndex:0, allowSorting: true, headerKey: 'pNRId', keyColumn: true})
        pNRId : number;
//#endregion pNRId Prop


//#region passengerName Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'passengerName', keyColumn: false})
        passengerName : string;
//#endregion passengerName Prop


//#region passengerAge Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'passengerAge', keyColumn: false})
        passengerAge : number;
//#endregion passengerAge Prop


//#region passengerGender Prop
        @gridColumn({visible: true, columnIndex:3, allowSorting: true, headerKey: 'passengerGender', keyColumn: false})
        passengerGender : string;
//#endregion passengerGender Prop


//#region trainName Prop
        @gridColumn({visible: true, columnIndex:4, allowSorting: true, headerKey: 'trainName', keyColumn: false})
        trainName : string;
//#endregion trainName Prop

}