import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { PNRGeneration } from '@app/models';

export class Abstractpnrsgeneration extends RxHttp {
    pnrsgenerationFormGroup: IFormGroup<PNRGeneration>
}
