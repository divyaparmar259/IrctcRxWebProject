import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class EWalletBase {

//#region eWalletId Prop
        @prop()
        eWalletId : number;
//#endregion eWalletId Prop


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


//#region refund Prop
        @required()
        refund : any;
//#endregion refund Prop



}