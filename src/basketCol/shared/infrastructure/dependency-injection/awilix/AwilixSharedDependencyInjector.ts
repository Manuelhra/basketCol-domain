import { IHttpResponseHandler } from '../../../application/http/IHttpResponseHandler';
import { HttpResponseHandler } from '../../http/HttpResponseHandler';
import { ServerErrorHandler } from '../../server/ServerErrorHandler';
import { SharedServerErrorHandler } from '../../server/SharedServerErrorHandler';
import { SharedContainer } from '../SharedContainer';
import { AwilixDependencyInjector } from './AwilixDependencyInjector';
import { AwilixDependencySetup } from './AwilixDependencySetup';

export class AwilixSharedDependencyInjector extends AwilixDependencyInjector<SharedContainer> {
  public constructor() {
    super();

    this.createContainer();
    this.registerDependencies({
      sharedServerErrorHandler: AwilixDependencySetup.registerAsClass<ServerErrorHandler>(SharedServerErrorHandler).singleton(),
      httpResponseHandler: AwilixDependencySetup.registerAsClass<IHttpResponseHandler>(HttpResponseHandler).singleton(),
    });
  }
}
