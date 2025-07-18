import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {OrganizationUser} from '../../models/organizations.models';
import {OrganizationCard} from '../../components/organization-card/organization-card';
import {CreateFab} from '../../../core/components/create-fab/create-fab';

@Component({
  selector: 'app-organizations-view',
  imports: [
    MatIconModule,
    MatButtonModule,
    OrganizationCard,
    CreateFab
  ],
  templateUrl: './organizations-view.html',
  styleUrl: './organizations-view.css'
})
export class OrganizationsView {

  router: Router = inject(Router)

  organizations: OrganizationUser[] = [
    {active: true, organization: {name: 'My organization', id:'1'}},
    {active: false, organization: {name: 'My organization', id:'2'}},
    {active: false, organization: {name: 'My organization', id:'3'}},
  ]

  onUpdateOrganization(payload: OrganizationUser){
    console.log(payload)
    this.router.navigate(['/organizations/update', payload.organization.id!])
  }

  onSetActiveOrganization(payload: OrganizationUser){
    console.log(payload)
  }

  openCreateOrganizationView(){
    this.router.navigateByUrl('/organizations/create')
  }

}
