import {Component, effect, input, output} from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

import {Account} from '../../models/accounts.models';

@Component({
  selector: 'app-accounts-list',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTableModule
  ],
  templateUrl: './accounts-list.html',
  styleUrl: './accounts-list.css'
})
export class AccountsList {

  accounts = input.required<Account[]>()
  updateAccount = output<Account>()
  deleteAccount = output<Account>()

  displayedColumns = ["code", "name", "type", "actions"]
  dataSource: MatTableDataSource<Account> = new MatTableDataSource()

  constructor() {
    effect(() => {
      this.dataSource.data = this.accounts()
    })
  }

  onUpdateAccount(payload: Account){
    this.updateAccount.emit(payload)
  }

  onDeleteAccount(payload: Account){
    this.deleteAccount.emit(payload)
  }

}
