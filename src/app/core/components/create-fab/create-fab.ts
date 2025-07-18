import {Component, output} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-create-fab',
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './create-fab.html',
  styleUrl: './create-fab.css'
})
export class CreateFab {

  fabClicked = output()

  onClick(){
    this.fabClicked.emit()
  }

}
