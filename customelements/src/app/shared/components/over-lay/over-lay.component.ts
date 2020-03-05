import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { getProductCollections } from '@store/selectors/selectors';

import { CustomElementState } from '@shared/models/index';
@Component({
  selector: 'app-over-lay',
  templateUrl: './over-lay.component.html',
  styleUrls: ['./over-lay.component.scss']
})
export class OverLayComponent implements OnInit {
  productCollections$ = this.store.select(getProductCollections).pipe(
    map(response => {
      if (response) {
        console.log(response);
        return response;
      }
    })
  );
  constructor(
    private dialogRef: MatDialogRef<OverLayComponent>,
    private store: Store<CustomElementState>
  ) {}

  ngOnInit(): void {}
  onNoClick() {
    this.dialogRef.close();
  }
}
