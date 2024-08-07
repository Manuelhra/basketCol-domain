interface Response {
  status(code: number): this;
  json(body: any): void;
  send(body?: any): void;
}

export interface ServerErrorHandler {
  run(response: Response, error: Error): void;
}
