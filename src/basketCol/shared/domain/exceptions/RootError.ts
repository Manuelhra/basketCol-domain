abstract class RootError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }

  public abstract logError(): string;
}

export default RootError;
