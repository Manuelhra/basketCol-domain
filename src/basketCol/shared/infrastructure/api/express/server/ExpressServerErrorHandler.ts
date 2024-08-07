import { Response } from 'express';

import { HttpStatus } from '../../../../domain/http/HttpStatus';
import { ServerErrorHandler } from '../../../../domain/server/ServerErrorHandler';

export class ExpressServerErrorHandler {
  readonly #response: Response;

  constructor() {
    this.#response = {} as Response;
  }

  public run(error: Error, serverErrorHandler: ServerErrorHandler[]): void {
    serverErrorHandler.forEach((errorHandler) => {
      errorHandler.run(this.#response, error);
    });

    this.#response.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
  }
}
