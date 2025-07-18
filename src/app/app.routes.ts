import { Routes } from '@angular/router';

import {OrganizationCreateView} from './organizations/views/organization-create-view/organization-create-view';
import {OrganizationUpdateView} from './organizations/views/organization-update-view/organization-update-view';
import {OrganizationsView} from './organizations/views/organizations-view/organizations-view';

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
  }
];
