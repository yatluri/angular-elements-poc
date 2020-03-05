export class LoggedUserModel {
  Token: string;
  TokenType: string;
  Status: string;
  Application: {
    Id: number;
    Code: string;
    Name: string;
    Version: string;
  };
}
