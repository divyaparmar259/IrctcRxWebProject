import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { TrainApplicationObject } from '@app/models';

export class AbstractTrainApplicationObject extends RxHttp {
    trainApplicationObjectFormGroup: IFormGroup<TrainApplicationObject>
}
