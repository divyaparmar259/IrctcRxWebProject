import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class TrainApplicationObjectTypeBase {

//#region trainApplicationObjectTypeId Prop
        @prop()
        trainApplicationObjectTypeId : number;
//#endregion trainApplicationObjectTypeId Prop


//#region trainId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        trainId : number;
//#endregion trainId Prop


//#region trainObjectTypeName Prop
        @required()
        @maxLength({value:50})
        trainObjectTypeName : string;
//#endregion trainObjectTypeName Prop





}