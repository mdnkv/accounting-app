import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';

import {Currency} from '../../models/currencies.models';

import {CreateFab} from '../../../core/components/create-fab/create-fab';
import {CurrenciesList} from '../../components/currencies-list/currencies-list';

@Component({
  selector: 'app-currencies-view',
  imports: [
    CreateFab,
    CurrenciesList
  ],
  templateUrl: './currencies-view.html',
  styleUrl: './currencies-view.css'
})
export class CurrenciesView {

  router: Router = inject(Router)

  currencies: Currency[] = [
    {name: 'Euro', code: 'EUR', primary: true, id: '1'},
    {name: 'US Dollar', code: 'USD', primary: false, id: '2'},
    {name: 'Serbian Dinar', code: 'RSD', primary: false, id: '3'},
    {name: 'Bosnian Marka', code: 'BAM', primary: false, id: '4'},
  ]

  openCreateCurrencyForm(){
    this.router.navigateByUrl('/currencies/create');
  }

  onUpdateCurrency(payload: Currency){
    console.log('update clicked')
    this.router.navigate(['/currencies/update', payload.id!])
  }

  onDeleteCurrency(payload: Currency){
    console.log('delete clicked')
  }

}
