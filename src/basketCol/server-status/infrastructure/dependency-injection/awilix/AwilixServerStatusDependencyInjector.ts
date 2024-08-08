import { Request, Response } from 'express';

import { IHttpResponseHandler } from '../../../../shared/application/http/IHttpResponseHandler';
import { AwilixDependencyInjector } from '../../../../shared/infrastructure/dependency-injection/awilix/AwilixDependencyInjector';
import { GlobFileSystem } from '../../../../shared/infrastructure/file-system/GlobFileSystem';
import { IFileSystem } from '../../../../shared/infrastructure/file-system/IFileSystem';
import { HttpResponseHandler } from '../../../../shared/infrastructure/http/HttpResponseHandler';
import { IController } from '../../../../shared/infrastructure/server/controllers/IController';
import { ExpressBaseRouteManager } from '../../../../shared/infrastructure/server/express/routes/ExpressBaseRouteManager';
import { ExpressServerStatusGetController } from '../../server/express/controllers/ExpressServerStatusGetController';
import { ExpressServerStatusRouteManager } from '../../server/express/routes/ExpressServerStatusRouteManager';
import { IServerStatusContainer } from '../IServerStatusContainer';

export class AwilixServerStatusDependencyInjector extends AwilixDependencyInjector<IServerStatusContainer> {
  public constructor() {
    super();

    this.createContainer();
    this.registerDependencies({
      basePath: AwilixDependencyInjector.registerAsValue<string>(__dirname),
      expressServerStatusGetController: AwilixDependencyInjector.registerAsClass<IController<Request, Response>>(ExpressServerStatusGetController).singleton(),
      fileSystem: AwilixDependencyInjector.registerAsClass<IFileSystem>(GlobFileSystem).singleton(),
      expressServerStatusRouteManager: AwilixDependencyInjector.registerAsClass<ExpressBaseRouteManager>(ExpressServerStatusRouteManager).singleton(),
      httpResponseHandler: AwilixDependencyInjector.registerAsClass<IHttpResponseHandler>(HttpResponseHandler).singleton(),
    });
  }
}
