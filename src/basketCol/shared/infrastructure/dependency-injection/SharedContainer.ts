import { IHttpResponseHandler } from '../../application/http/IHttpResponseHandler';
import { ServerErrorHandler } from '../server/ServerErrorHandler';

export interface SharedContainer {
  sharedServerErrorHandler: ServerErrorHandler;
  httpResponseHandler: IHttpResponseHandler;
}
