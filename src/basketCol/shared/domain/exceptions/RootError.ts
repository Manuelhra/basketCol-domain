export abstract class RootError extends Error {
  protected constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }

  public abstract logError(): string;
}
