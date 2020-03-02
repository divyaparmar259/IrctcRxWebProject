import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class TrainApplicationObjectBase {

//#region trainApplicationObjectId Prop
        @prop()
        trainApplicationObjectId : number;
//#endregion trainApplicationObjectId Prop


//#region trainApplicationObjectTypeId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        trainApplicationObjectTypeId : number;
//#endregion trainApplicationObjectTypeId Prop


//#region trainApplicationObjectClassName Prop
        @required()
        @maxLength({value:50})
        trainApplicationObjectClassName : string;
//#endregion trainApplicationObjectClassName Prop


//#region trainApplicationObjectFare Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        trainApplicationObjectFare : number;
//#endregion trainApplicationObjectFare Prop



}