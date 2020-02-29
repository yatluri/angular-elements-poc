import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Injector } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { createCustomElement } from '@angular/elements';
import { SharedModule } from './shared/shared.module';

import { CustomEleComponent } from './custom-ele/custom-ele.component';

import { Reducer } from '@store/reducers/reducer';

@NgModule({
  declarations: [CustomEleComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    StoreModule.forRoot({ customElementState: Reducer.customReducer })
  ],
  entryComponents: [CustomEleComponent],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const customElementRef = createCustomElement(CustomEleComponent, {
      injector: this.injector
    });
    if (!customElements.get('custom-element')) {
      customElements.define('custom-element', customElementRef);
    }
  }
}
