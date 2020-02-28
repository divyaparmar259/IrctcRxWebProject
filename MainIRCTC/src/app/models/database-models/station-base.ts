import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class StationBase {

//#region stationId Prop
        @prop()
        stationId : number;
//#endregion stationId Prop


//#region trainId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        trainId : number;
//#endregion trainId Prop


//#region stationStartingPoint Prop
        @required()
        @maxLength({value:50})
        stationStartingPoint : string;
//#endregion stationStartingPoint Prop


//#region stationEndingPoint Prop
        @required()
        @maxLength({value:50})
        stationEndingPoint : string;
//#endregion stationEndingPoint Prop


//#region stationDistance Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        stationDistance : number;
//#endregion stationDistance Prop





}