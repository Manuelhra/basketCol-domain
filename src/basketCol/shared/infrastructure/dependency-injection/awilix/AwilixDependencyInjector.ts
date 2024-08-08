import { AwilixContainer, createContainer, NameAndRegistrationPair } from 'awilix';

import { DependencyInjector } from '../DependencyInjector';

export abstract class AwilixDependencyInjector<TContainer extends Object> implements DependencyInjector<AwilixContainer<TContainer>, NameAndRegistrationPair<TContainer>> {
  public container: AwilixContainer<TContainer> | null = null;

  public createContainer(): void {
    this.container = createContainer<TContainer>();
  }

  public getContainer(): AwilixContainer<TContainer> | null {
    return this.container;
  }

  public registerDependencies(dependencies: NameAndRegistrationPair<TContainer>): void {
    if (this.container !== null) {
      this.container.register(dependencies);
    }
  }
}

// TODO: Terminar de crear esta clase abstrac y verificar que las clases abstractas sean abstractas
// Tener en cuenta a la hora de la injectio dependency si una clase es abtrasct no se puede crear una instancia de la clase
