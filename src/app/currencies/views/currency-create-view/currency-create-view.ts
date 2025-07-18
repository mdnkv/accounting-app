import { Component } from '@angular/core';
import {CurrencyForm} from '../../components/currency-form/currency-form';
import {FormPageHeader} from '../../../core/components/form-page-header/form-page-header';
import {Currency} from '../../models/currencies.models';

@Component({
  selector: 'app-currency-create-view',
  imports: [
    CurrencyForm,
    FormPageHeader
  ],
  templateUrl: './currency-create-view.html',
  styleUrl: './currency-create-view.css'
})
export class CurrencyCreateView {

  goBack() {}

  onCreateCurrency(payload: Currency){
    console.log(payload)
  }

}
