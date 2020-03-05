import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Customer } from '@app/models';

export class AbstractCustomerLogin extends RxHttp {
    customerLoginFormGroup: IFormGroup<Customer>
}
