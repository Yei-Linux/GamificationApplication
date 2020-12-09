export class Response {
  constructor(public message: string) {}

  get _message() {
      return this.message;
  }
}
