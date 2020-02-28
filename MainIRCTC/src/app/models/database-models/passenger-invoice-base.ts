import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class PassengerInvoiceBase {

//#region passengerInvoiceId Prop
        @prop()
        passengerInvoiceId : number;
//#endregion passengerInvoiceId Prop


//#region userId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        userId : number;
//#endregion userId Prop


//#region totalPrice Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        totalPrice : number;
//#endregion totalPrice Prop


//#region numberOfPassengers Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        numberOfPassengers : number;
//#endregion numberOfPassengers Prop





}