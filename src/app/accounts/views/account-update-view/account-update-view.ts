import {Component, input} from '@angular/core';
import {Account} from '../../models/accounts.models';
import {FormPageHeader} from '../../../core/components/form-page-header/form-page-header';
import {AccountForm} from '../../components/account-form/account-form';

@Component({
  selector: 'app-account-update-view',
  imports: [
    FormPageHeader,
    AccountForm
  ],
  templateUrl: './account-update-view.html',
  styleUrl: './account-update-view.css'
})
export class AccountUpdateView {

  accountId = input.required<string>()

  account: Account =  {
    id: '1',
    name: 'Cash - Regular checking',
    code: '10100',
    type: 'ASSET',
    deprecated: true
  }

  onUpdateAccount(payload: Account){
    console.log(payload)
  }

  goBack(){}

}
