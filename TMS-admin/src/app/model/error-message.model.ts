export class ErrorMessageModel {
  error_code: string;
  error_messgae: string;
  detail_message: string;

  constructor(
    error_code: string,
    error_message: string,
    detail_message: string
  ) {
    this.error_code = error_code;
    this.error_messgae = error_message;
    this.detail_message = detail_message;
  }
}
