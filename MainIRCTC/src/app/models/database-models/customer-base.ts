import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CustomerBase {

//#region userId Prop
        @prop()
        userId : number;
//#endregion userId Prop


//#region userName Prop
        @required()
        @maxLength({value:50})
        userName : string;
//#endregion userName Prop


//#region password Prop
        @required()
        @maxLength({value:50})
        password : string;
//#endregion password Prop


//#region fullName Prop
        @required()
        @maxLength({value:50})
        fullName : string;
//#endregion fullName Prop


//#region gender Prop
        @required()
        @maxLength({value:50})
        gender : string;
//#endregion gender Prop


//#region userDob Prop
        @prop()
        userDob : Date;
//#endregion userDob Prop


//#region country Prop
        @required()
        @maxLength({value:50})
        country : string;
//#endregion country Prop


//#region email Prop
        @required()
        @maxLength({value:50})
        email : string;
//#endregion email Prop


//#region mobileNumber Prop
        @required()
        @maxLength({value:50})
        mobileNumber : string;
//#endregion mobileNumber Prop


//#region address Prop
        @required()
        @maxLength({value:100})
        address : string;
//#endregion address Prop


//#region pinCode Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        pinCode : number;
//#endregion pinCode Prop


//#region aadharCardNumber Prop
        @required()
        aadharCardNumber : any;
//#endregion aadharCardNumber Prop















}