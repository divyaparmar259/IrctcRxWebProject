import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class TrainAvailableBase {

//#region trainAvailableId Prop
        @prop()
        trainAvailableId : number;
//#endregion trainAvailableId Prop


//#region trainId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        trainId : number;
//#endregion trainId Prop


//#region trainAvailableDay Prop
        @required()
        @maxLength({value:50})
        trainAvailableDay : string;
//#endregion trainAvailableDay Prop



}