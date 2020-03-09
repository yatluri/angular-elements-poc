import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// material module
import { MaterialModule } from '@material/material.module';

import { OverLayComponent } from './components/over-lay/over-lay.component';
import { ImagErrorHandlerDirective } from './directives/imag-error-handler.directive';

@NgModule({
  declarations: [OverLayComponent, ImagErrorHandlerDirective],
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    OverLayComponent,
    ImagErrorHandlerDirective
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
