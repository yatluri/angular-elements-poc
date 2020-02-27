import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { SharedModule } from './shared/shared.module';

import { CustomEleComponent } from './custom-ele/custom-ele.component';

@NgModule({
  declarations: [CustomEleComponent],
  imports: [BrowserModule, BrowserAnimationsModule, SharedModule.forRoot()],
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
