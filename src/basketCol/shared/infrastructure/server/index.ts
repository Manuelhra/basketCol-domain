import { RootRouteManager } from './routes/RootRouteManager';
import { ServerErrorHandler } from './ServerErrorHandler';

export interface Server {
  listen(port: string): Promise<void>;
  stop(): Promise<void>;
  registerRoutes(routerManager: RootRouteManager[]): void;
  handleErrors(serverErrorHandlerList: ServerErrorHandler[]): void;
}
