import { Component } from '@angular/core';
import {FormPageHeader} from '../../../core/components/form-page-header/form-page-header';
import {Account} from '../../models/accounts.models';
import {AccountForm} from '../../components/account-form/account-form';

@Component({
  selector: 'app-account-create-view',
  imports: [
    FormPageHeader,
    AccountForm
  ],
  templateUrl: './account-create-view.html',
  styleUrl: './account-create-view.css'
})
export class AccountCreateView {

  goBack(){}

  onCreateAccount(payload: Account){
    console.log(payload)
  }

}
