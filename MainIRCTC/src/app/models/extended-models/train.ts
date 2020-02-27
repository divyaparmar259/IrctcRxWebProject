import {TrainBase} from '../database-models/train-base';
import {StationBase} from '../database-models/station-base';
import {TrainApplicationObjectTypeBase} from '../database-models/train-application-object-type-base';
import {PassengerBase} from '../database-models/passenger-base';
import {TrainAvailableBase} from '../database-models/train-available-base';
//Generated Imports
export class Train extends TrainBase 
{




//#region Generated Reference Properties
//#region stations Prop
stations : StationBase[];
//#endregion stations Prop
//#region trainApplicationObjectType Prop
trainApplicationObjectType : TrainApplicationObjectTypeBase[];
//#endregion trainApplicationObjectType Prop
//#region passengers Prop
passengers : PassengerBase[];
//#endregion passengers Prop
//#region trainAvailable Prop
trainAvailable : TrainAvailableBase[];
//#endregion trainAvailable Prop

//#endregion Generated Reference Properties




}