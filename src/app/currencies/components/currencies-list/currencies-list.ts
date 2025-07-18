import {Component, effect, input, output} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

import {Currency} from '../../models/currencies.models';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-currencies-list',
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './currencies-list.html',
  styleUrl: './currencies-list.css'
})
export class CurrenciesList {

  displayedColumns: string[] = [
    'name', 'code', 'actions'
  ]
  dataSource: MatTableDataSource<Currency> = new MatTableDataSource()

  currencies = input.required<Currency[]>()

  updateCurrency = output<Currency>()
  deleteCurrency = output<Currency>()

  constructor() {
    effect(() => {
      this.dataSource.data = this.currencies()
    });
  }

  onUpdateCurrency(payload: Currency){
    this.updateCurrency.emit(payload)
  }

  onDeleteCurrency(payload: Currency){
    this.deleteCurrency.emit(payload)
  }

}
