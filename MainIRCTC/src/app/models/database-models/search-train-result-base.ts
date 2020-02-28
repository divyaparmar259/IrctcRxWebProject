import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class SearchTrainResultBase {

//#region searchTrainId Prop
        @prop()
        searchTrainId : number;
//#endregion searchTrainId Prop


//#region stationSP Prop
        @required()
        @maxLength({value:50})
        stationSP : string;
//#endregion stationSP Prop


//#region stationEP Prop
        @required()
        @maxLength({value:50})
        stationEP : string;
//#endregion stationEP Prop


//#region day Prop
        @required()
        @maxLength({value:50})
        day : string;
//#endregion day Prop


//#region classname Prop
        @required()
        @maxLength({value:50})
        classname : string;
//#endregion classname Prop


//#region totalcount Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        totalcount : number;
//#endregion totalcount Prop


//#region userId Prop
        @prop()
        userId : number;
//#endregion userId Prop



}