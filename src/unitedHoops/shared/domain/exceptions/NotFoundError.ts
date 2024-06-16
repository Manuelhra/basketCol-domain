class NotFoundError extends Error {
  constructor(message?: string) {
    const defaultMessage = 'Element not ofund.';
    super(message ?? defaultMessage);

    this.name = 'NotFoundError';
  }
}

export default NotFoundError;
