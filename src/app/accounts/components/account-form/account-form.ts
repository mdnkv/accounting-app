import {Component, effect, inject, input, output, signal} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {Account} from '../../models/accounts.models';

@Component({
  selector: 'app-account-form',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  templateUrl: './account-form.html',
  styleUrl: './account-form.css'
})
export class AccountForm {

  formBuilder: FormBuilder = inject(FormBuilder)
  form: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(255)]],
    code: ['', [Validators.required, Validators.maxLength(25)]],
    type: ['ASSET', [Validators.required]],
    deprecated: [false]
  })

  updateMode= signal(false)
  submitForm = output<Account>()
  currentAccount = input<Account>()

  constructor() {
    effect(() => {
      if (this.currentAccount() != undefined){
        this.updateMode.set(true)
        this.updateForm(this.currentAccount()!)
      } else {
        this.updateMode.set(false)
      }
    })
  }

  updateForm(payload: Account){
    this.form.get('name')?.setValue(payload.name)
    this.form.get('code')?.setValue(payload.code)
    this.form.get('type')?.setValue(payload.type)
    this.form.get('deprecated')?.setValue(payload.deprecated)
  }

  onSubmit(){
    if (this.updateMode()){
      // update
      const payload: Account = {
        ...this.currentAccount()!,
        name: this.form.get('name')?.value,
        code: this.form.get('code')?.value,
        deprecated: this.form.get('deprecated')?.value,
        type: this.form.get('type')?.value
      }

      this.submitForm.emit(payload)

    } else {

      const payload: Account = {
        name: this.form.get('name')?.value,
        code: this.form.get('code')?.value,
        type: this.form.get('type')?.value,
        deprecated: false
      }

      this.submitForm.emit(payload)

    }
  }

}
