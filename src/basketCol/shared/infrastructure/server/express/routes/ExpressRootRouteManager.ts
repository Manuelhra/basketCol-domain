import { Router } from 'express';

import { RootRouteManager } from '../../routes/RootRouteManager';
import { FileSystem } from '../../../file-system/FileSystem';

export abstract class ExpressRootRouteManager implements RootRouteManager {
  readonly #fileSystem: FileSystem;

  constructor(dependencies: {
    fileSystem: FileSystem;
    basePath: string;
  }) {
    this.#fileSystem = dependencies.fileSystem;
  }

  public registerRoutes(router: Router): void {
    const routes: string[] = this.#fileSystem.getFiles('**/*.route.*', {});
    routes.forEach((route) => this.registerRoute(route, router));
  }

  private registerRoute(routePath: string, router: any): void {
    const module = this.#fileSystem.requireModule(routePath);
    module.default(router);
  }
}
