import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Train } from '@app/models';

export class AbstractTrain extends RxHttp {
    trainFormGroup: IFormGroup<Train>
}
