import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogData } from 'src/app/models/Dialogdata.model';
import { Task } from 'src/app/models/Task.model';
import { DialogPopupComponent } from '../dialog-popup/dialog-popup.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-view-task-list',
  templateUrl: './view-task-list.component.html',
  styleUrls: ['./view-task-list.component.scss'],
})
export class ViewTaskListComponent {
  data: DialogData = {
    tasks: [],
    title: '',
    type: 'update',
    index: -1,
  };
  @Input() tasks: Task[] = [];
  @Input() searchTerm: string = '';

  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) {}

  openDialog(title: string, index: number): void {
    const dialogRef = this.dialog.open(DialogPopupComponent, {
      data: { ...this.data, tasks: this.tasks, title, index },
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  onDelete(index: number) {
    this.tasks.splice(index, 1);
    this.openSnackBar('Deleted Successfully', 'OK');
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  filterTasks() {
    return this.tasks.filter(
      (task) =>
        task.value.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        task.type.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
