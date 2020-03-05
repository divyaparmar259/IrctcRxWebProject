import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class BookTrainResultBase {

//#region bookTrainId Prop
        @prop()
        bookTrainId : number;
//#endregion bookTrainId Prop


//#region userId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        userId : number;
//#endregion userId Prop


//#region trainName Prop
        @required()
        @maxLength({value:50})
        trainName : string;
//#endregion trainName Prop


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


//#region stationArriveTime Prop
        @required()
        @maxLength({value:50})
        stationArriveTime : string;
//#endregion stationArriveTime Prop


//#region stationDepartTime Prop
        @required()
        @maxLength({value:50})
        stationDepartTime : string;
//#endregion stationDepartTime Prop


//#region trainObjectTypeName Prop
        @required()
        @maxLength({value:50})
        trainObjectTypeName : string;
//#endregion trainObjectTypeName Prop


//#region trainAvailableDay Prop
        @required()
        @maxLength({value:50})
        trainAvailableDay : string;
//#endregion trainAvailableDay Prop


//#region trainApplicationObjectClassName Prop
        @required()
        @maxLength({value:50})
        trainApplicationObjectClassName : string;
//#endregion trainApplicationObjectClassName Prop


//#region farePerPerson Prop
        @required()
        farePerPerson : any;
//#endregion farePerPerson Prop



}