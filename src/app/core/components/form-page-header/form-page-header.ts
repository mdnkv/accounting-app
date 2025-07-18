import {Component, output} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-form-page-header',
  imports: [
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './form-page-header.html',
  styleUrl: './form-page-header.css'
})
export class FormPageHeader {

  goBack = output()

  onGoBack() {
    this.goBack.emit()
  }

}
