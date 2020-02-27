import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { OverLayComponent } from '@shared/components/over-lay/over-lay.component';

@Component({
  selector: 'app-custom-ele',
  templateUrl: './custom-ele.component.html',
  styleUrls: ['./custom-ele.component.scss']
})
export class CustomEleComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
  onToggle() {
    const dialogRef = this.dialog.open(OverLayComponent, {
      width: '25%',
      data: { message: 'I am successfully Clicked' }
    });
  }
}
