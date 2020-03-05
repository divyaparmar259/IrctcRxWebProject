import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { TrainAvailable } from '@app/models';

export class AbstractTrainAvailable extends RxHttp {
    trainAvailableFormGroup: IFormGroup<TrainAvailable>
}
