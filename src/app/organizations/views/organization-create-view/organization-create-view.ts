import {Component} from '@angular/core';

import {OrganizationForm} from '../../components/organization-form/organization-form';
import {Organization} from '../../models/organizations.models';
import {FormPageHeader} from '../../../core/components/form-page-header/form-page-header';

@Component({
  selector: 'app-organization-create-view',
  imports: [
    OrganizationForm,
    FormPageHeader
  ],
  templateUrl: './organization-create-view.html',
  styleUrl: './organization-create-view.css'
})
export class OrganizationCreateView {

  goBack(){
    console.log('Go back clicked')
  }

  onCreateOrganization(organization: Organization){
    console.log(organization)
  }

}
