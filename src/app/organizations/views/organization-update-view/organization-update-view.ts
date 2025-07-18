import {Component, input} from '@angular/core';
import {Organization} from '../../models/organizations.models';
import {OrganizationForm} from '../../components/organization-form/organization-form';
import {FormPageHeader} from '../../../core/components/form-page-header/form-page-header';

@Component({
  selector: 'app-organization-update-view',
  imports: [
    OrganizationForm,
    FormPageHeader,
  ],
  templateUrl: './organization-update-view.html',
  styleUrl: './organization-update-view.css'
})
export class OrganizationUpdateView {

  organizationId = input.required<string>()

  organization: Organization = {
    name: 'My organization'
  }

  goBack() {

  }

  onUpdateOrganization(organization: Organization) {
    console.log(organization)
  }

}
