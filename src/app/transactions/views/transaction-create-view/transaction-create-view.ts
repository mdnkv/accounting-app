import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CurrencyPipe} from '@angular/common';

import {provideNativeDateAdapter} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialog} from '@angular/material/dialog';

import {FormPageHeader} from '../../../core/components/form-page-header/form-page-header';
import {TransactionLine} from '../../models/transactions.models';
import {TransactionLineItem} from '../../components/transaction-line-item/transaction-line-item';
import {Currency} from '../../../currencies/models/currencies.models';
import {
  TransactionLineCreateDialog
} from '../../components/transaction-line-create-dialog/transaction-line-create-dialog';

@Component({
  selector: 'app-transaction-create-view',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    FormPageHeader,
    TransactionLineItem,
    CurrencyPipe,
  ],
  templateUrl: './transaction-create-view.html',
  styleUrl: './transaction-create-view.css',
  providers: [provideNativeDateAdapter()]
})
export class TransactionCreateView {

  lines: TransactionLine[] = []

  currencies: Currency[] = [{id: '1', name:'Euro', code: 'EUR', primary:true}]
  primaryCurrency: Currency = this.currencies.at(0)!

  totalDebitAmount: number = 0
  totalCreditAmount: number = 0
  balance: number = 0
  isBalanced: boolean = true

  formBuilder:FormBuilder = inject(FormBuilder)
  dialog: MatDialog = inject(MatDialog)
  form: FormGroup = this.formBuilder.group({
    date: [null, [Validators.required]],
    currencyId: [null, [Validators.required]],
    description: ['', [Validators.required]]
  })

  goBack(){}

  onSubmit(){}

  openTransactionLineCreateDialog(){
    let dialogRef = this.dialog.open(TransactionLineCreateDialog, {
      width: '600px'
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.addNewTransactionLine(result)
      } else {
        console.log("no result")
      }
    })
  }

  addNewTransactionLine(payload: TransactionLine){
    console.log(payload)
    this.lines.push(payload)
    this.totalDebitAmount += payload.debitAmount
    this.totalCreditAmount += payload.creditAmount
    this.isBalanced = this.totalCreditAmount == this.totalDebitAmount
    this.balance = Math.abs( this.totalCreditAmount - this.totalDebitAmount)
  }

  deleteTransactionLine(index: number){}

}
