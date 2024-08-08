import { DependencyContainerNotInitializedError } from '../../domain/exceptions/DependencyContainerNotInitializedError';
import { AwilixSharedDependencyInjector } from './awilix/AwilixSharedDependencyInjector';

const awilixSharedContainer = new AwilixSharedDependencyInjector().getContainer();

if (awilixSharedContainer === null) {
  throw new DependencyContainerNotInitializedError();
}

export const expressSharedServerErrorHandler = awilixSharedContainer.resolve('expressSharedServerErrorHandler');
