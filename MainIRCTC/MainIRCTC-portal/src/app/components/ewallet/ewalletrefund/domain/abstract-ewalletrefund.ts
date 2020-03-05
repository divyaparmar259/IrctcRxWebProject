import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { EWallet } from '@app/models';

export class Abstractewalletrefund extends RxHttp {
    ewalletrefundFormGroup: IFormGroup<EWallet>
}
