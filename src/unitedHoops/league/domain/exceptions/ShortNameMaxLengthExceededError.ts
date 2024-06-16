class ShortNameMaxLengthExceededError extends Error {
  constructor() {
    super('Short name exceeds maximum length allowed');

    this.name = 'ShortNameMaxLengthExceededError';
  }
}

export default ShortNameMaxLengthExceededError;
