import { Routes } from '@angular/router';

import {OrganizationCreateView} from './organizations/views/organization-create-view/organization-create-view';
import {OrganizationUpdateView} from './organizations/views/organization-update-view/organization-update-view';
import {OrganizationsView} from './organizations/views/organizations-view/organizations-view';
import {CurrenciesView} from './currencies/views/currencies-view/currencies-view';
import {CurrencyUpdateView} from './currencies/views/currency-update-view/currency-update-view';
import {CurrencyCreateView} from './currencies/views/currency-create-view/currency-create-view';
import {AccountCreateView} from './accounts/views/account-create-view/account-create-view';
import {AccountUpdateView} from './accounts/views/account-update-view/account-update-view';
import {AccountsView} from './accounts/views/accounts-view/accounts-view';
import {TransactionsView} from './transactions/views/transactions-view/transactions-view';
import {TransactionCreateView} from './transactions/views/transaction-create-view/transaction-create-view';

export const routes: Routes = [
  {
    path: 'organizations/create',
    component: OrganizationCreateView,
  },
  {
    path: 'organizations/update/:organizationId',
    component: OrganizationUpdateView,
  },
  {
    path: 'organizations',
    component: OrganizationsView,
  },
  {
    path: 'currencies/create',
    component: CurrencyCreateView
  },
  {
    path: 'currencies/update/:currencyId',
    component: CurrencyUpdateView,
  },
  {
    path: 'currencies',
    component: CurrenciesView
  },
  {
    path:'accounts/create',
    component: AccountCreateView
  },
  {
    path: 'accounts/update/:accountId',
    component: AccountUpdateView
  },
  {
    path:'accounts',
    component: AccountsView
  },
  {
    path:'transactions/create',
    component: TransactionCreateView
  },
  {
    path: 'transactions',
    component: TransactionsView
  }
];
