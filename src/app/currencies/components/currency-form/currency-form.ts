import {Component, effect, inject, input, output, signal} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {Currency} from '../../models/currencies.models';

@Component({
  selector: 'app-currency-form',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  templateUrl: './currency-form.html',
  styleUrl: './currency-form.css'
})
export class CurrencyForm {

  formBuilder: FormBuilder = inject(FormBuilder)
  form: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(255)]],
    code: ['', [Validators.required, Validators.maxLength(3)]],
    primary: [false]
  })

  updateMode= signal(false)
  submitForm = output<Currency>()
  currentCurrency = input<Currency>()

  constructor() {
    effect(() => {
      if (this.currentCurrency() != undefined){
        this.updateMode.set(true)
        this.updateForm(this.currentCurrency()!)
      } else {
        this.updateMode.set(false)
      }
    });
  }

  updateForm(payload: Currency){
    this.form.get('name')?.setValue(payload.name)
    this.form.get('code')?.setValue(payload.code)
    this.form.get('primary')?.setValue(payload.primary)
  }

  onSubmit(){
    if (this.updateMode()){
      // Update currency
      const payload: Currency = {
        name: this.form.get('name')?.value,
        code: this.form.get('code')?.value,
        primary: this.form.get('primary')?.value,
        id: this.currentCurrency()!.id!
      }

      this.submitForm.emit(payload)

    } else {
      // Create new currency
      const payload: Currency = {
        name: this.form.get('name')?.value,
        code: this.form.get('code')?.value,
        primary: false
      }

      this.submitForm.emit(payload)
    }
  }

}
