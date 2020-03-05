import {
  Page,
  ProductCollection,
  LoginModel,
  LoggedUserModel
} from '@shared/models/index';

export class CustomElementState {
  displayWindow?: boolean;
  dialogMessage?: string;
  page?: Page;
  productCollections?: Array<ProductCollection>;
  loginModel?: LoginModel;
  loggedUserModel?: LoggedUserModel;
}
