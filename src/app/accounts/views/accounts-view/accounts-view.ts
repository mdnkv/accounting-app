import {Component, inject} from '@angular/core';
import {Account} from '../../models/accounts.models';
import {CreateFab} from '../../../core/components/create-fab/create-fab';
import {Router} from '@angular/router';
import {AccountsList} from '../../components/accounts-list/accounts-list';

@Component({
  selector: 'app-accounts-view',
  imports: [
    CreateFab,
    AccountsList
  ],
  templateUrl: './accounts-view.html',
  styleUrl: './accounts-view.css'
})
export class AccountsView {

  router: Router = inject(Router)

  accounts: Account[] = [
    {
      id: '1',
      name: 'Cash - Regular checking',
      code: '10100',
      type: 'ASSET',
      deprecated: false
    },
    {
      id: '2',
      name: 'Common stock',
      code: '27100',
      type: 'EQUITY',
      deprecated: false
    },
    {
      id: '3',
      name: 'Notes Payable - Credit line 1',
      code: '20100',
      type: 'LIABILITY',
      deprecated: false
    },
    {
      id: '4',
      name: 'Sales',
      code: '31010',
      type: 'INCOME',
      deprecated: false
    },
    {
      id: '5',
      name: 'Marketing Department Salaries',
      code: '50100',
      type: 'EXPENSE',
      deprecated: false
    }
  ]

  openCreateAccountForm(){
    this.router.navigateByUrl('/accounts/create')
  }

  onUpdateAccount(payload: Account){
    this.router.navigate(['/accounts/update', payload.id!])
  }

  onDeleteAccount(payload: Account){
    console.log('delete account')
  }

}
