import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CityBase {

//#region citiId Prop
        @prop()
        citiId : number;
//#endregion citiId Prop


//#region cityName Prop
        @required()
        @maxLength({value:50})
        cityName : string;
//#endregion cityName Prop



}