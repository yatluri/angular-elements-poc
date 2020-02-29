import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { getDisplayMessage } from '@store/selectors/selectors';

import { CustomElementState } from '@shared/models/custom-element.state';
@Component({
  selector: 'app-over-lay',
  templateUrl: './over-lay.component.html',
  styleUrls: ['./over-lay.component.scss']
})
export class OverLayComponent implements OnInit {
  m$ = this.store.select(getDisplayMessage);
  constructor(
    private dialogRef: MatDialogRef<OverLayComponent>,
    private store: Store<CustomElementState>
  ) {}

  ngOnInit(): void {}
  onNoClick() {
    this.dialogRef.close();
  }
}
