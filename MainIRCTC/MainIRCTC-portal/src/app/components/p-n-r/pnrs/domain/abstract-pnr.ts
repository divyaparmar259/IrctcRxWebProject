import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { vPNR } from '@app/models';

export class Abstractpnr extends RxHttp {
    pnrFormGroup: IFormGroup<vPNR>
}
