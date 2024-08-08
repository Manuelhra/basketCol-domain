export interface ServerErrorHandlerResponse {
  status(code: number): this;
  json(body: any): void;
  send(body?: any): void;
}

export interface ServerErrorHandler {
  run(response: ServerErrorHandlerResponse, error: Error): void;
}
