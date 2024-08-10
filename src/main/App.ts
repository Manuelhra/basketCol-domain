import { Router, Response } from 'express';

import { expressServerStatusRouteManager } from '../basketCol/server-status/infrastructure/dependency-injection';
import { expressSharedServerErrorHandler } from '../basketCol/shared/infrastructure/dependency-injection';
import { IServer } from '../basketCol/shared/infrastructure/server';
import { ExpressServer } from '../basketCol/shared/infrastructure/server/express/server/ExpressServer';
import { expressHostUserRouteManager } from '../basketCol/users/host/infrastructure/dependency-injection';

export class App {
  readonly #server: IServer<Router, Response>;

  constructor() {
    this.#server = new ExpressServer();

    this.setUpRoutes();
    this.handleErrors();
  }

  public start(port: string): void {
    this.#server.listen(port);
  }

  public stop(): void {
    this.#server.stop();
  }

  private setUpRoutes(): void {
    this.#server.registerRoutes([
      expressServerStatusRouteManager,
      expressHostUserRouteManager,
    ]);
  }

  private handleErrors(): void {
    this.#server.handleErrors([
      expressSharedServerErrorHandler,
    ]);
  }
}

// TODO: Handle error on all context file
