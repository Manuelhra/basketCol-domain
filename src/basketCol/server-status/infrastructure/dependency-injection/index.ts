import { DependencyContainerNotInitializedError } from '../../../shared/domain/exceptions/DependencyContainerNotInitializedError';
import { AwilixServerStatusDependencyInjector } from './awilix/AwilixServerStatusDependencyInjector';

const awilixServerStatusContainer = new AwilixServerStatusDependencyInjector().getContainer();

if (awilixServerStatusContainer === null) {
  throw new DependencyContainerNotInitializedError();
}

export const serverStatusGetController = awilixServerStatusContainer.resolve('serverStatusGetController');
export const serverStatusRouteManager = awilixServerStatusContainer.resolve('serverStatusRouteManager');
