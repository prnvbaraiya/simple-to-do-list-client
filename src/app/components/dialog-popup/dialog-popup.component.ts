import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from 'src/app/models/Dialogdata.model';

@Component({
  selector: 'app-dialog-popup',
  templateUrl: './dialog-popup.component.html',
  styleUrls: ['./dialog-popup.component.scss'],
})
export class DialogPopupComponent {
  val: string = '';
  taskType: string = '';
  constructor(
    public dialogRef: MatDialogRef<DialogPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.val = this.data.tasks[this.data.index!]?.value || '';
    this.taskType = this.data.tasks[this.data.index!]?.type || 'new';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(): void {
    if (this.data.type === 'add') {
      this.data.tasks.push({ value: this.val, type: this.taskType });
    } else if (this.data.type === 'update') {
      this.data.tasks[this.data.index!] = {
        value: this.val,
        type: this.taskType,
      };
    }
    this.dialogRef.close();
  }
}
