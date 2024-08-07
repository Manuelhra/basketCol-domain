import { Router } from 'express';

import { FileSystem } from '../../../../domain/file-system/FileSystem';
import { RootRouteManager } from '../../../../domain/routes/RootRouteManager';

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
