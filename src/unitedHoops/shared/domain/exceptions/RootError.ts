abstract class RootError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }

  abstract logError(): string;
}

export default RootError;
