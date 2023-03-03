import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogPopupComponent } from './components/dialog-popup/dialog-popup.component';
import { DialogData } from './models/Dialogdata.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'to-do-list-client';
  data: DialogData = {
    tasks: [{ value: 'Task 1' }, { value: 'Task 2' }],
    type: 'add',
    title: '',
  };

  constructor(public dialog: MatDialog) {}

  openDialog(title: string): void {
    const dialogRef = this.dialog.open(DialogPopupComponent, {
      data: { ...this.data, title },
    });
  }
}
