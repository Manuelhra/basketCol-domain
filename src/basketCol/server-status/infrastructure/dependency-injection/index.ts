import { DependencyContainerNotInitializedError } from '../../../shared/domain/exceptions/DependencyContainerNotInitializedError';
import { AwilixServerStatusDependencyInjector } from './awilix/AwilixServerStatusDependencyInjector';

const awilixServerStatusContainer = new AwilixServerStatusDependencyInjector().getContainer();

if (awilixServerStatusContainer === null) {
  throw new DependencyContainerNotInitializedError();
}

export const expressServerStatusGetController = awilixServerStatusContainer.resolve('expressServerStatusGetController');
export const expressServerStatusRouteManager = awilixServerStatusContainer.resolve('expressServerStatusRouteManager');
