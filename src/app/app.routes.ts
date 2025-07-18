import { Routes } from '@angular/router';

import {OrganizationCreateView} from './organizations/views/organization-create-view/organization-create-view';
import {OrganizationUpdateView} from './organizations/views/organization-update-view/organization-update-view';
import {OrganizationsView} from './organizations/views/organizations-view/organizations-view';
import {CurrenciesView} from './currencies/views/currencies-view/currencies-view';
import {CurrencyUpdateView} from './currencies/views/currency-update-view/currency-update-view';
import {CurrencyCreateView} from './currencies/views/currency-create-view/currency-create-view';

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
  }
];
