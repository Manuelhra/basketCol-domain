import { ApiResponse } from './ApiResponse';

export interface ErrorApiResponse extends ApiResponse {
  error: {
    name: string,
    details: string,
  },
}
