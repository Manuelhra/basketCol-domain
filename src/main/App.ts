import { serverStatusRouteManager } from '../basketCol/server-status/infrastructure/dependency-injection';
import { Server } from '../basketCol/shared/domain/server';
import { ExpressServer } from '../basketCol/shared/infrastructure/api/express/server/ExpressServer';

export class App {
  readonly #server: Server;

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
      serverStatusRouteManager,
    ]);
  }

  private handleErrors(): void {
    this.#server.handleErrors([]);
  }
}
