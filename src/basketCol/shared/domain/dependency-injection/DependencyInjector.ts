export interface DependencyInjector<TContainer, TDependencies> {
  container: TContainer | null;
  createContainer(): void;
  getContainer(): TContainer | null;
  registerDependencies(dependencies: TDependencies): void;
}
