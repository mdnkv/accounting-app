import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogRef} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {Account} from '../../../accounts/models/accounts.models';
import {TransactionLine} from '../../models/transactions.models';

@Component({
  selector: 'app-transaction-line-create-dialog',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: './transaction-line-create-dialog.html',
  styleUrl: './transaction-line-create-dialog.css'
})
export class TransactionLineCreateDialog {

  accounts: Account[] = [
    {
      id: '1',
      name: 'Cash - Regular checking',
      code: '10100',
      type: 'ASSET',
      deprecated: false
    },
    {
      id: '2',
      name: 'Common stock',
      code: '27100',
      type: 'EQUITY',
      deprecated: false
    },
    {
      id: '3',
      name: 'Notes Payable - Credit line 1',
      code: '20100',
      type: 'LIABILITY',
      deprecated: false
    },
    {
      id: '4',
      name: 'Sales',
      code: '31010',
      type: 'INCOME',
      deprecated: false
    },
    {
      id: '5',
      name: 'Marketing Department Salaries',
      code: '50100',
      type: 'EXPENSE',
      deprecated: false
    }
  ]

  formBuilder: FormBuilder = inject(FormBuilder)
  dialogRef:MatDialogRef<TransactionLineCreateDialog> = inject(MatDialogRef<TransactionLineCreateDialog>)
  form: FormGroup = this.formBuilder.group({
    debitAmount: [0.0, [Validators.required, Validators.min(0)]],
    creditAmount: [0.0, [Validators.required, Validators.min(0)]],
    accountId: [null, [Validators.required]]
  })

  onSubmit(){
    const payload: TransactionLine = {
      debitAmount: this.form.get('debitAmount')?.value,
      creditAmount: this.form.get('creditAmount')?.value,
      accountId: this.form.get('accountId')?.value
    }
    this.dialogRef.close(payload)
  }

  close(){
    this.dialogRef.close();
  }

}
