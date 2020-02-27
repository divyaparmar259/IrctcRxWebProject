import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class PaymentBase {

//#region paymentId Prop
        @prop()
        paymentId : number;
//#endregion paymentId Prop


//#region paymentAmount Prop
        @required()
        paymentAmount : any;
//#endregion paymentAmount Prop


//#region paymentDate Prop
        @required()
        paymentDate : Date;
//#endregion paymentDate Prop


//#region userId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        userId : number;
//#endregion userId Prop



}