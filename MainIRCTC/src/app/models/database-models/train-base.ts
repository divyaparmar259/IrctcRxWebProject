import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class TrainBase {

//#region trainId Prop
        @prop()
        trainId : number;
//#endregion trainId Prop


//#region trainName Prop
        @required()
        @maxLength({value:50})
        trainName : string;
//#endregion trainName Prop


//#region trainStartingPoint Prop
        @required()
        @maxLength({value:50})
        trainStartingPoint : string;
//#endregion trainStartingPoint Prop


//#region trainEndingPoint Prop
        @required()
        @maxLength({value:50})
        trainEndingPoint : string;
//#endregion trainEndingPoint Prop


//#region trainArriveTime Prop
        @required()
        trainArriveTime : any;
//#endregion trainArriveTime Prop


//#region trainDepartTime Prop
        @required()
        trainDepartTime : any;
//#endregion trainDepartTime Prop


//#region trainFarePerKm Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        trainFarePerKm : number;
//#endregion trainFarePerKm Prop









}