import { ApiResponse } from './ApiResponse';

export interface SuccessApiResponse<T> extends ApiResponse {
  data: T;
}
