import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class PNRGenerationBase {

//#region pNRId Prop
        @prop()
        pNRId : number;
//#endregion pNRId Prop


//#region userId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        userId : number;
//#endregion userId Prop


//#region paymentId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        paymentId : number;
//#endregion paymentId Prop


//#region passengerId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        passengerId : number;
//#endregion passengerId Prop


//#region passengerInvoiceId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        passengerInvoiceId : number;
//#endregion passengerInvoiceId Prop



}