import { ErrorApiResponse } from './ErrorApiResponse';
import { SuccessApiResponse } from './SuccessApiResponse';

export interface IHttpResponseHandler {
  handleSuccessResponse<T>(payload: { code: number; message: string; data: T; }): SuccessApiResponse<T>;
  handleErrorResponse(payload: { code: number; message: string; error: { name: string; details: string; }; }): ErrorApiResponse;
}
