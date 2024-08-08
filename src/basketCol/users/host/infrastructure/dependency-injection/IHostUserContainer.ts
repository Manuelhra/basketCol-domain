import { Request, Response } from 'express';

import { IFileSystem } from '../../../../shared/infrastructure/file-system/IFileSystem';
import { IController } from '../../../../shared/infrastructure/server/controllers/IController';

export interface IHostUserContainer {
  basePath: string;
  fileSystem: IFileSystem;
  expressHostUserPostController: IController<Request, Response>;
}
