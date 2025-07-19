import {Component, input, output} from '@angular/core';
import {CurrencyPipe} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {TransactionLine} from '../../models/transactions.models';
import {Currency} from '../../../currencies/models/currencies.models';

@Component({
  selector: 'app-transaction-line-item',
  imports: [
    CurrencyPipe,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './transaction-line-item.html',
  styleUrl: './transaction-line-item.css'
})
export class TransactionLineItem {

  transactionLine = input.required<TransactionLine>()
  currency = input.required<Currency>()
  deleteTransactionLine = output()

  onDelete() {
    this.deleteTransactionLine.emit()
  }

}
