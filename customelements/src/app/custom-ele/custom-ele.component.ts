import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { OverLayComponent } from '@shared/components/over-lay/over-lay.component';

import { CustomElementState, initialState } from '@shared/models/index';

import * as customElementActions from '@store/actions/custom-element.action';

import { getDisplayWindow } from '@store/selectors/selectors';

@Component({
  selector: 'app-custom-ele',
  templateUrl: './custom-ele.component.html',
  styleUrls: ['./custom-ele.component.scss']
})
export class CustomEleComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private store: Store<CustomElementState>
  ) {
    this.store.dispatch(
      customElementActions.loadLoginInfo({
        payload: initialState.loginModel
      })
    );
  }

  ngOnInit(): void {}
  onToggle($event: MouseEvent) {
    $event.stopImmediatePropagation();
    this.store.dispatch(
      customElementActions.loadProductCollections({
        payload: initialState.page
      })
    );
    const config: MatDialogConfig = {
      width: '100%',
      disableClose: true
    };
    const dialogRef = this.dialog.open(OverLayComponent, config);
  }
}
