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
  constructor(
    public dialogRef: MatDialogRef<DialogPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.val = this.data.tasks[this.data.index!]?.value || '';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(): void {
    if (this.data.type === 'add') {
      this.data.tasks.push({ value: this.val });
    } else if (this.data.type === 'update') {
      this.data.tasks[this.data.index!] = { value: this.val };
    }
    this.dialogRef.close();
  }
}
