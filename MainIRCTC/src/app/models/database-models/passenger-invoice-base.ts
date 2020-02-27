import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class PassengerInvoiceBase {

//#region passengerInvoiceCount Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        passengerInvoiceCount : number;
//#endregion passengerInvoiceCount Prop


//#region userId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        userId : number;
//#endregion userId Prop


//#region passengerInvoiceId Prop
        @prop()
        passengerInvoiceId : number;
//#endregion passengerInvoiceId Prop



}