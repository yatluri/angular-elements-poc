import { NgModule, ModuleWithProviders } from '@angular/core';

// angular material components

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { OverLayComponent } from './components/over-lay/over-lay.component';

@NgModule({
  declarations: [OverLayComponent],
  imports: [MatButtonModule, MatDialogModule],
  exports: [MatButtonModule, MatDialogModule, OverLayComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
