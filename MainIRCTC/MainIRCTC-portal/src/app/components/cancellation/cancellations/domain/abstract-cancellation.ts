import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { EWallet } from '@app/models';

export class AbstractCancellation extends RxHttp {
    cancellationFormGroup: IFormGroup<EWallet>
}
