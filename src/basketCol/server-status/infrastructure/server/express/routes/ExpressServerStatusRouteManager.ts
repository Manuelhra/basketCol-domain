import { IFileSystem } from '../../../../../shared/infrastructure/file-system/IFileSystem';
import { ExpressBaseRouteManager } from '../../../../../shared/infrastructure/server/express/routes/ExpressBaseRouteManager';

export class ExpressServerStatusRouteManager extends ExpressBaseRouteManager {
  public constructor(dependencies: {
    fileSystem: IFileSystem;
    basePath: string;
  }) {
    super(dependencies);
  }
}
