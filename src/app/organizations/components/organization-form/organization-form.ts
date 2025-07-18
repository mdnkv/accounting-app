import {Component, effect, inject, input, output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {Organization} from '../../models/organizations.models';

@Component({
  selector: 'app-organization-form',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './organization-form.html',
  styleUrl: './organization-form.css'
})
export class OrganizationForm {

  formBuilder: FormBuilder = inject(FormBuilder)
  form: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(255)]]
  })

  submitForm = output<Organization>()
  currentOrganization = input<Organization>()

  constructor() {
    effect(() => {
      if (this.currentOrganization() != undefined){
        this.updateForm(this.currentOrganization()!)
      }
    });
  }

  updateForm (payload: Organization){
    this.form.get('name')?.setValue(payload.name)
  }

  onSubmit() {
    const payload: Organization = {
      name: this.form.controls['name'].value
    }
    this.submitForm.emit(payload)
  }

}
