import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogData } from 'src/app/models/Dialogdata.model';
import { DialogPopupComponent } from '../dialog-popup/dialog-popup.component';

@Component({
  selector: 'app-view-task-list',
  templateUrl: './view-task-list.component.html',
  styleUrls: ['./view-task-list.component.scss'],
})
export class ViewTaskListComponent {
  @Input() tasks: any;
  data: DialogData = {
    tasks: [],
    title: '',
    type: 'update',
    index: -1,
  };

  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) {}

  openDialog(title: string, index: number): void {
    const dialogRef = this.dialog.open(DialogPopupComponent, {
      data: { ...this.data, tasks: this.tasks, title, index },
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  onDelete(index: any) {
    this.tasks.splice(index, 1);
    this.openSnackBar('Deleted Successfully', 'OK');
  }
}
