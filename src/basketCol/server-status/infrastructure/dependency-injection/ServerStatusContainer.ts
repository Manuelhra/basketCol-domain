import { RootController } from '../../../shared/domain/controllers/RootController';
import { FileSystem } from '../../../shared/domain/file-system/FileSystem';
import { RootRouteManager } from '../../../shared/domain/routes/RootRouteManager';

export interface ServerStatusContainer {
  basePath: string;
  serverStatusGetController: RootController;
  fileSystem: FileSystem;
  serverStatusRouteManager: RootRouteManager;
}
