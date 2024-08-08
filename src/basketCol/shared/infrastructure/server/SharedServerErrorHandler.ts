import { ErrorApiResponse } from '../../application/http/ErrorApiResponse';
import { IHttpResponseHandler } from '../../application/http/IHttpResponseHandler';
import { DatabaseConnectionFailedError } from '../../domain/exceptions/DatabaseConnectionFailedError';
import { DateGreaterThanError } from '../../domain/exceptions/DateGreaterThanError';
import { DependencyContainerNotInitializedError } from '../../domain/exceptions/DependencyContainerNotInitializedError';
import { DuplicateIdError } from '../../domain/exceptions/DuplicateIdError';
import { HttpStatus } from '../../domain/http/HttpStatus';
import { ServerErrorHandler, ServerErrorHandlerResponse } from './ServerErrorHandler';

export class SharedServerErrorHandler implements ServerErrorHandler {
  readonly #httpResponseHandler: IHttpResponseHandler;

  public constructor(dependencies: {
    httpResponseHandler: IHttpResponseHandler;
  }) {
    this.#httpResponseHandler = dependencies.httpResponseHandler;
  }

  public run(response: ServerErrorHandlerResponse, error: Error): void {
    let errorResponse: ErrorApiResponse | null = null;
    let status: number | null = null;
    let isInstanceof: boolean = false;

    switch (true) {
      case error instanceof DependencyContainerNotInitializedError:
      case error instanceof DatabaseConnectionFailedError:
        errorResponse = this.#httpResponseHandler.handleErrorResponse({
          code: HttpStatus.INTERNAL_SERVER_ERROR,
          message: HttpStatus.getMessage(HttpStatus.INTERNAL_SERVER_ERROR),
          error: {
            name: error.name,
            details: error.message,
          },
        });

        status = HttpStatus.INTERNAL_SERVER_ERROR;
        isInstanceof = true;
        break;

      case error instanceof DateGreaterThanError:
        errorResponse = this.#httpResponseHandler.handleErrorResponse({
          code: HttpStatus.BAD_REQUEST,
          message: HttpStatus.getMessage(HttpStatus.BAD_REQUEST),
          error: {
            name: error.name,
            details: error.message,
          },
        });

        status = HttpStatus.BAD_REQUEST;
        isInstanceof = true;
        break;

      case error instanceof DuplicateIdError:
        errorResponse = this.#httpResponseHandler.handleErrorResponse({
          code: HttpStatus.CONFLICT,
          message: HttpStatus.getMessage(HttpStatus.CONFLICT),
          error: {
            name: error.name,
            details: error.message,
          },
        });

        status = HttpStatus.CONFLICT;
        isInstanceof = true;
    }

    if (isInstanceof && status !== null && errorResponse !== null) {
      response.status(status).json(errorResponse);
    }
  }
}

// TODO: Crear injection dependencies para shrared y segui con ls exceptions para cada contexto
