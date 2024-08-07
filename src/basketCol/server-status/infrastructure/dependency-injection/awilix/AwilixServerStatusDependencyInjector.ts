import { RootController } from '../../../../shared/domain/controllers/RootController';
import { FileSystem } from '../../../../shared/domain/file-system/FileSystem';
import { RootRouteManager } from '../../../../shared/domain/routes/RootRouteManager';
import { AwilixDependencyInjector } from '../../../../shared/infrastructure/dependency-injection/awilix/AwilixDependencyInjector';
import { AwilixDependencySetup } from '../../../../shared/infrastructure/dependency-injection/awilix/AwilixDependencySetup';
import { GlobFileSystem } from '../../../../shared/infrastructure/file-system/GlobFileSystem';
import { ExpressServerStatusGetController } from '../../controllers/express/ExpressServerStatusGetController';
import { ExpressServerStatusRouteManager } from '../../routes/express/ExpressServerStatusRouteManager';
import { ServerStatusContainer } from '../ServerStatusContainer';

export class AwilixServerStatusDependencyInjector extends AwilixDependencyInjector<ServerStatusContainer> {
  public constructor() {
    super();

    this.createContainer();
    this.registerDependencies({
      basePath: AwilixDependencySetup.registerAsValue<string>(__dirname),
      serverStatusGetController: AwilixDependencySetup.registerAsClass<RootController>(ExpressServerStatusGetController).singleton(),
      fileSystem: AwilixDependencySetup.registerAsClass<FileSystem>(GlobFileSystem),
      serverStatusRouteManager: AwilixDependencySetup.registerAsClass<RootRouteManager>(ExpressServerStatusRouteManager).singleton(),
    });
  }
}
