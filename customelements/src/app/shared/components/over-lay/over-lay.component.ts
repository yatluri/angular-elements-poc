import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogData } from '../../models/mat.dialog.data';
@Component({
  selector: 'app-over-lay',
  templateUrl: './over-lay.component.html',
  styleUrls: ['./over-lay.component.scss']
})
export class OverLayComponent implements OnInit {
  message: string;
  constructor(
    private dialogRef: MatDialogRef<OverLayComponent>,
    @Inject(MAT_DIALOG_DATA) private data: MatDialogData
  ) {
    this.message = this.data.message;
  }

  ngOnInit(): void {}
  onNoClick() {
    this.dialogRef.close();
  }
}
