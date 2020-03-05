import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Injector } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { createCustomElement } from '@angular/elements';

// import local references
import { SharedModule } from './shared/shared.module';
import { CustomEleComponent } from './custom-ele/custom-ele.component';
import { reducerMap, metaReducers } from '@store/reducers/reducer';
import { CustomElementEffects } from '@store/effects/custom-element.effects';

import { CustomElementAuthInterceptors } from '@shared/interceptors/custom-element.auth.interceptors';
@NgModule({
  declarations: [CustomEleComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    StoreModule.forRoot(reducerMap, {
      metaReducers,
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true
      }
    }),
    EffectsModule.forRoot([CustomElementEffects])
  ],
  entryComponents: [CustomEleComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomElementAuthInterceptors,
      multi: true
    }
  ]
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
