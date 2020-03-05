import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  isClicked = false;
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
  onToggle() {
    this.store.dispatch(
      customElementActions.loadMessage({
        payload: 'I am successfully Clicked through ngrx dispatch method'
      })
    );
    const dialogRef = this.dialog.open(OverLayComponent, {
      width: '25%'
    });
  }
}
