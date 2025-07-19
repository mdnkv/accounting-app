import {Component, effect, input} from '@angular/core';
import {CurrencyPipe, DatePipe} from '@angular/common';

import {MatTableDataSource, MatTableModule} from '@angular/material/table';

import {Transaction} from '../../models/transactions.models';

@Component({
  selector: 'app-transactions-list',
  imports: [
    MatTableModule,
    CurrencyPipe,
    DatePipe
  ],
  templateUrl: './transactions-list.html',
  styleUrl: './transactions-list.css'
})
export class TransactionsList {

  displayedColumns = ['date', 'description', 'debitAmount', 'creditAmount']
  transactions = input.required<Transaction[]>()
  dataSource = new MatTableDataSource<Transaction>()

  constructor() {
    effect(() => {
      this.dataSource.data = this.transactions()
    })
  }

}
