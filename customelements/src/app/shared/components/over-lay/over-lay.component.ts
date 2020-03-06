import { Component, OnInit, ChangeDetectionStrategy, ViewChild, OnDestroy } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Store } from '@ngrx/store';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { getProductCollections } from '@store/selectors/selectors';

import { CustomElementState, OverlayViewModel, ProductCollection, Page, initialState} from '@shared/models/index';

import * as customElementsActions from '@store/actions/custom-element.action';


@Component({
  selector: 'app-over-lay',
  templateUrl: './over-lay.component.html',
  styleUrls: ['./over-lay.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverLayComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  vm = new OverlayViewModel();
  pForm: FormGroup = this.getPform();
  productCollections$ = this.store.select(getProductCollections).pipe(
    map((response) => {
      if (response) {
        this.vm.isLoader = false;
        this.vm.dataSource = new MatTableDataSource<ProductCollection>(response);
        this.vm.dataSourceLength = response.length;
        this.setDataSourceAttributes();
        return response;
      }
    })
  );
  constructor(
    private dialogRef: MatDialogRef<OverLayComponent>,
    private store: Store<CustomElementState>,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.customListeners();
  }
  ngOnDestroy() {
    if (this.vm.subscriptions.length > 0) {
      this.vm.subscriptions.forEach((v, k) => {
        v.unsubscribe();
      });
    }
  }
  onClose() {
    this.dialogRef.close();
  }
  getPform(): FormGroup {
    return this.fb.group({
      pFilter: ['' , []]
    });
  }
  setDataSourceAttributes() {
    this.vm.dataSource.paginator = this.paginator;
  }
  customListeners() {
    this.vm.subscriptions.push(this.pForm.get('pFilter').
    valueChanges.pipe(debounceTime(800), distinctUntilChanged()).subscribe((value: string) => {
      const p: Page = {...initialState.page};
      p.query = value;
      this.store.dispatch(customElementsActions.loadProductCollections({
       payload: p
     }));
    }));
  }
}
