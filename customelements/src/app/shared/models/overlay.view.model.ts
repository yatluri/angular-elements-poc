import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { MatTableDataSource } from '@angular/material/table';
import {Subscription} from 'rxjs';
import { ProductCollection, Page } from '@shared/models/index';
export class OverlayViewModel {
    displayedColumns = ['Image', 'Name', 'StatusCode', 'Description', 'WebsiteCount', 'ProductCount', 'Action'];
    isLoader = true;
    color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 75;
  dataSource: MatTableDataSource<ProductCollection>;
  dataSourceLength = 0;
  subscriptions: Array<Subscription> = [];
  pageSizeOptions = [5, 10, 15];
}
