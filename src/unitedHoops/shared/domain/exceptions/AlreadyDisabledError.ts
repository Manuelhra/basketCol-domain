class AlreadyDisabledError extends Error {
  constructor(message?: string) {
    const defaultMessage = 'The element is already disabled.';
    super(message ?? defaultMessage);

    this.name = 'AlreadyDisabledError';
  }
}

export default AlreadyDisabledError;
