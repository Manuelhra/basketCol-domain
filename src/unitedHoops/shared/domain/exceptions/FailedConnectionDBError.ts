class FailedConnectionDBError extends Error {
  constructor(message?: string) {
    super(message);

    this.name = 'FailedConnectionDBError';
  }
}

export default FailedConnectionDBError;
