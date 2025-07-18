import {Component, input} from '@angular/core';
import {FormPageHeader} from '../../../core/components/form-page-header/form-page-header';
import {CurrencyForm} from '../../components/currency-form/currency-form';
import {Currency} from '../../models/currencies.models';

@Component({
  selector: 'app-currency-update-view',
  imports: [
    FormPageHeader,
    CurrencyForm
  ],
  templateUrl: './currency-update-view.html',
  styleUrl: './currency-update-view.css'
})
export class CurrencyUpdateView {

  currencyId = input.required<string>()
  currency: Currency = {
    id: '1',
    name: 'Colombian Peso',
    code: 'COP',
    primary: true
  }

  goBack(){}

  onUpdateCurrency(payload: Currency){
    console.log('update clicked')
  }

}
