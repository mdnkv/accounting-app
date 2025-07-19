import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';

import {TransactionsList} from '../../components/transactions-list/transactions-list';
import {CreateFab} from '../../../core/components/create-fab/create-fab';
import {Transaction, TRANSACTIONS} from '../../models/transactions.models';

@Component({
  selector: 'app-transactions-view',
  imports: [
    TransactionsList,
    CreateFab
  ],
  templateUrl: './transactions-view.html',
  styleUrl: './transactions-view.css'
})
export class TransactionsView {

  router: Router = inject(Router)

  transactions: Transaction[] = TRANSACTIONS

  openCreateTransactionView(){
    this.router.navigateByUrl('/transactions/create')
  }

}
