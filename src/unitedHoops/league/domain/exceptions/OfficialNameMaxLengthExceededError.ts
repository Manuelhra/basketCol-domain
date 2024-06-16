class OfficialNameMaxLengthExceededError extends Error {
  constructor() {
    super('Official name exceeds maximum length allowed');

    this.name = 'OfficialNameMaxLengthExceededError';
  }
}

export default OfficialNameMaxLengthExceededError;
