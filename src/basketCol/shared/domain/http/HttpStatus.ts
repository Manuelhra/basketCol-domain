export class HttpStatus {
  public static readonly OK = 200;

  public static readonly CREATED = 201;

  public static readonly NO_CONTENT = 204;

  public static readonly BAD_REQUEST = 400;

  public static readonly UNAUTHORIZED = 401;

  public static readonly FORBIDDEN = 403;

  public static readonly NOT_FOUND = 404;

  public static readonly CONFLICT = 409;

  public static readonly INTERNAL_SERVER_ERROR = 500;

  private static readonly statusMessages: { [key: number]: string } = {
    200: 'OK',
    201: 'Created',
    204: 'No Content',
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    409: 'Conflict',
    500: 'Internal Server Error',
  };

  public static getMessage(statusCode: number): string {
    return this.statusMessages[statusCode] || 'Unknown Status';
  }
}
