import { Injectable } from '@angular/core';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { map, mergeMap, concatMap, catchError } from 'rxjs/operators';

// importing local references
import { CustomService } from '@shared/services/custom.service';
import * as customElementActions from '@store/actions/custom-element.action';
import { ProductCollection } from '@shared/models';
import { Observable } from 'rxjs';

@Injectable()
export class CustomElementEffects {
  loadProductCollections$ = createEffect(() =>
    this.actions$.pipe(
      ofType(customElementActions.loadProductCollections),
      mergeMap(action =>
        this.cService.getProductCollection(action.payload).pipe(
          map(response =>
            customElementActions.loadProductCollectionSuccess({
              payload: response
            })
          )
        )
      )
    )
  );
  loadLoginInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(customElementActions.loadLoginInfo),
      mergeMap(action =>
        this.cService
          .getLoginInfo(action.payload)
          .pipe(
            map(response =>
              customElementActions.loginSuccess({ payload: response })
            )
          )
      )
    )
  );
  constructor(private cService: CustomService, private actions$: Actions) {}
}
