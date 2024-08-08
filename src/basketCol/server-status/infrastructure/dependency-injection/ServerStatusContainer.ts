import { FileSystem } from '../../../shared/infrastructure/file-system/FileSystem';
import { RootController } from '../../../shared/infrastructure/server/controllers/RootController';
import { RootRouteManager } from '../../../shared/infrastructure/server/routes/RootRouteManager';

export interface ServerStatusContainer {
  basePath: string;
  serverStatusGetController: RootController;
  fileSystem: FileSystem;
  serverStatusRouteManager: RootRouteManager;
}
