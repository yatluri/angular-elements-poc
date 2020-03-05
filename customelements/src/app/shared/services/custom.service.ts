import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// importing local references
import {
  ProductCollection,
  Page,
  LoginModel,
  LoggedUserModel
} from '@shared/models/index';

@Injectable({
  providedIn: 'root'
})
export class CustomService {
  constructor(private http: HttpClient) {}

  getProductCollection(params: Page): Observable<Array<ProductCollection>> {
    const page = new HttpParams()
      .set('q', params.query)
      .append('page', `${params.number}`)
      .append('rpp', `${params.size}`)
      .append('sort', `${params.sortColumn}`)
      .append('sortDir', `${params.sortDir}`)
      .append('filter', `${params.filter}`);
    const url =
      'https://api.asicentral.com/v1/companies/601497/product_collections/search.json';
    return this.http
      .get<ProductCollection[]>(url, { params: page })
      .pipe(map((response: ProductCollection[]) => response));
  }
  getLoginInfo(l: LoginModel): Observable<LoggedUserModel> {
    console.log(l);
    const formData = new FormData();
    formData.append('asi_number', l.asi_number.toString());
    formData.append('userName', l.userName);
    formData.append('password', l.password);
    formData.append('app_group', l.app_group !== null ? l.app_group : '');
    formData.append('app_code', l.app_code);
    formData.append('app_version', l.app_version);
    formData.append('kick', l.kick !== null ? l.kick : '1');
    formData.append('invoke', l.invoke !== null ? l.invoke : '');
    const url = 'https://api.asicentral.com/v1/login.json';
    return this.http.post<LoggedUserModel>(url, formData).pipe(
      map((response: LoggedUserModel) => {
        return response;
      })
    );
  }
}
