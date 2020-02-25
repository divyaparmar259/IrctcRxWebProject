import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class StationDetailBase {

//#region stationDeatilId Prop
        @prop()
        stationDeatilId : number;
//#endregion stationDeatilId Prop


//#region stationId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        stationId : number;
//#endregion stationId Prop


//#region stationArriveTime Prop
        @required()
        stationArriveTime : any;
//#endregion stationArriveTime Prop


//#region stationDepartTime Prop
        @required()
        stationDepartTime : any;
//#endregion stationDepartTime Prop



}