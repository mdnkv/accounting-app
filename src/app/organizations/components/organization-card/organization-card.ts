import {Component, input, output} from '@angular/core';
import {MatCardModule} from '@angular/material/card';

import {OrganizationUser} from '../../models/organizations.models';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-organization-card',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './organization-card.html',
  styleUrl: './organization-card.css'
})
export class OrganizationCard {

  organization = input.required<OrganizationUser>()
  setActive = output<OrganizationUser>()
  update = output<OrganizationUser>()

  onSetActive(){
    console.log('set active clicked')
  }

  onUpdate (){
    console.log('update clicked')
    this.update.emit(this.organization())
  }

}
