class DatabaseConnectionFailedError extends Error {
  constructor(details: string) {
    const message = `Database connection failed: ${details}`;
    super(message);
    this.name = 'DatabaseConnectionFailedError';
  }
}

export default DatabaseConnectionFailedError;
