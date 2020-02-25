import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class PassengerBase {

//#region passengerId Prop
        @prop()
        passengerId : number;
//#endregion passengerId Prop


//#region userId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        userId : number;
//#endregion userId Prop


//#region passengerName Prop
        @required()
        @maxLength({value:50})
        passengerName : string;
//#endregion passengerName Prop


//#region passengerAge Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        passengerAge : number;
//#endregion passengerAge Prop


//#region passengerGender Prop
        @required()
        @maxLength({value:10})
        passengerGender : string;
//#endregion passengerGender Prop


//#region passengerCountry Prop
        @required()
        @maxLength({value:50})
        passengerCountry : string;
//#endregion passengerCountry Prop


//#region trainId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        trainId : number;
//#endregion trainId Prop





}