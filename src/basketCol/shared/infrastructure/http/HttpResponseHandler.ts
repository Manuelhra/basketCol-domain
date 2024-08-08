import { ErrorApiResponse } from '../../application/http/ErrorApiResponse';
import { IHttpResponseHandler } from '../../application/http/IHttpResponseHandler';
import { SuccessApiResponse } from '../../application/http/SuccessApiResponse';

export class HttpResponseHandler implements IHttpResponseHandler {
  public handleSuccessResponse<T>(body: { code: number; message: string; data: T; }): SuccessApiResponse<T> {
    return {
      code: body.code,
      message: body.message,
      data: body.data,
    };
  }

  public handleErrorResponse(body: { code: number; message: string; error: { name: string; details: string; }; }): ErrorApiResponse {
    return {
      code: body.code,
      message: body.message,
      error: body.error,
    };
  }
}
