import RootError from './RootError';

class DatabaseConnectionFailedError extends RootError {
  constructor(details: string) {
    const message = `Database connection failed: ${details}`;
    super(message);
    this.name = 'DatabaseConnectionFailedError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}

export default DatabaseConnectionFailedError;
