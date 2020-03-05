import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { TrainApplicationObjectType } from '@app/models';

export class AbstractTrainApplicationObjectType extends RxHttp {
    trainApplicationObjectTypeFormGroup: IFormGroup<TrainApplicationObjectType>
}
