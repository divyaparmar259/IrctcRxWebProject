import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vSearchTrainBase {

//#region trainName Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'trainName', keyColumn: false})
        trainName : string;
//#endregion trainName Prop


//#region stationStartingPoint Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'stationStartingPoint', keyColumn: false})
        stationStartingPoint : string;
//#endregion stationStartingPoint Prop


//#region stationEndingPoint Prop
        @gridColumn({visible: true, columnIndex:3, allowSorting: true, headerKey: 'stationEndingPoint', keyColumn: false})
        stationEndingPoint : string;
//#endregion stationEndingPoint Prop


//#region stationArriveTime Prop
        @gridColumn({visible: true, columnIndex:4, allowSorting: true, headerKey: 'stationArriveTime', keyColumn: false})
        stationArriveTime : any;
//#endregion stationArriveTime Prop


//#region stationDepartTime Prop
        @gridColumn({visible: true, columnIndex:5, allowSorting: true, headerKey: 'stationDepartTime', keyColumn: false})
        stationDepartTime : any;
//#endregion stationDepartTime Prop


//#region trainObjectTypeName Prop
        @gridColumn({visible: true, columnIndex:6, allowSorting: true, headerKey: 'trainObjectTypeName', keyColumn: false})
        trainObjectTypeName : string;
//#endregion trainObjectTypeName Prop


//#region trainAvailableDay Prop
        @gridColumn({visible: true, columnIndex:7, allowSorting: true, headerKey: 'trainAvailableDay', keyColumn: false})
        trainAvailableDay : string;
//#endregion trainAvailableDay Prop


//#region trainApplicationObjectClassName Prop
        @gridColumn({visible: true, columnIndex:8, allowSorting: true, headerKey: 'trainApplicationObjectClassName', keyColumn: false})
        trainApplicationObjectClassName : string;
//#endregion trainApplicationObjectClassName Prop


//#region stationDistance Prop
        @gridColumn({visible: true, columnIndex:9, allowSorting: true, headerKey: 'stationDistance', keyColumn: false})
        stationDistance : any;
//#endregion stationDistance Prop


//#region trainFarePerKm Prop
        @gridColumn({visible: true, columnIndex:10, allowSorting: true, headerKey: 'trainFarePerKm', keyColumn: false})
        trainFarePerKm : any;
//#endregion trainFarePerKm Prop


//#region trainApplicationObjectFare Prop
        @gridColumn({visible: true, columnIndex:11, allowSorting: true, headerKey: 'trainApplicationObjectFare', keyColumn: false})
        trainApplicationObjectFare : any;
//#endregion trainApplicationObjectFare Prop

}