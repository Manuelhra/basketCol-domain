class LengthExceededError extends Error {
  constructor(label: string) {
    super(`${label} exceeds maximum length allowed`);

    this.name = 'LengthExceededError';
  }
}

export default LengthExceededError;
