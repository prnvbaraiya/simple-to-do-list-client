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
    tasks: [
      { value: 'New Task', type: 'new' },
      { value: 'Important Task', type: 'important' },
      { value: 'Urgent Task', type: 'urgent' },
      { value: 'Routine Task', type: 'routine' },
      { value: 'Optional Task', type: 'optional' },
      { value: 'Completed Task', type: 'completed' },
    ],
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
