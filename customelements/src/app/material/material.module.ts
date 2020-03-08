import { NgModule, ModuleWithProviders } from '@angular/core';

// importing @angular/cdk for drag and drop functionality
import { DragDropModule } from '@angular/cdk/drag-drop';
// importing @angular/material modules
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    DragDropModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatPaginatorModule,
    MatIconModule
  ],
  exports: [
    DragDropModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatPaginatorModule,
    MatIconModule
  ]
})
export class MaterialModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: MaterialModule,
      providers: []
    };
  }
}
