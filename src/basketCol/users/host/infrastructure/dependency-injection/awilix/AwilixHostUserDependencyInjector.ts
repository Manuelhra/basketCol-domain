import { Request, Response } from 'express';

import { AwilixDependencyInjector } from '../../../../../shared/infrastructure/dependency-injection/awilix/AwilixDependencyInjector';
import { GlobFileSystem } from '../../../../../shared/infrastructure/file-system/GlobFileSystem';
import { IFileSystem } from '../../../../../shared/infrastructure/file-system/IFileSystem';
import { ExpressHostUserPostController } from '../../server/express/controllers/ExpressHostUserPostController';
import { IHostUserContainer } from '../IHostUserContainer';
import { IController } from '../../../../../shared/infrastructure/server/controllers/IController';

export class AwilixHostUserDependencyInjector extends AwilixDependencyInjector<IHostUserContainer> {
  public constructor() {
    super();

    this.createContainer();
    this.registerDependencies({
      basePath: AwilixDependencyInjector.registerAsValue<string>(__dirname),
      fileSystem: AwilixDependencyInjector.registerAsClass<IFileSystem>(GlobFileSystem).singleton(),
      expressHostUserPostController: AwilixDependencyInjector.registerAsClass<IController<Request, Response>>(ExpressHostUserPostController).singleton(),
    });
  }
}
