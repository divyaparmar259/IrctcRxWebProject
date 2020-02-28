import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CardBase {

//#region cardId Prop
        @prop()
        cardId : number;
//#endregion cardId Prop


//#region cardExpiryMonth Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        cardExpiryMonth : number;
//#endregion cardExpiryMonth Prop


//#region cardExpiryYear Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        cardExpiryYear : number;
//#endregion cardExpiryYear Prop


//#region cardCvv Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        cardCvv : number;
//#endregion cardCvv Prop


//#region cardNumber Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        cardNumber : number;
//#endregion cardNumber Prop


//#region userId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        userId : number;
//#endregion userId Prop



}