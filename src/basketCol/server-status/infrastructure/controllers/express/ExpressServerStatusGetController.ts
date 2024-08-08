import { Request, Response } from 'express';

import { HttpStatus } from '../../../../shared/domain/http/HttpStatus';
import { ExpressController } from '../../../../shared/infrastructure/server/express/controllers/ExpressController';
import { IHttpResponseHandler } from '../../../../shared/application/http/IHttpResponseHandler';

export class ExpressServerStatusGetController extends ExpressController {
  readonly #httpResponseHandler: IHttpResponseHandler;

  public constructor(dependencies: {
    httpResponseHandler: IHttpResponseHandler;
  }) {
    super();

    this.#httpResponseHandler = dependencies.httpResponseHandler;
  }

  public async run(_request: Request, response: Response): Promise<void> {
    const successResponse = this.#httpResponseHandler.handleSuccessResponse({
      code: HttpStatus.OK,
      message: 'Server is running',
      data: null,
    });

    response.status(HttpStatus.OK).json(successResponse);
  }
}
