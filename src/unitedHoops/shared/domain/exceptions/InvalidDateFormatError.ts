class InvalidDateFormatError extends Error {
  constructor(value: string, expectedFormat: string) {
    const message = `Invalid date format: '${value}' does not match the required format '${expectedFormat}'.`;
    super(message);

    this.name = 'InvalidDateFormatError';
  }
}

export default InvalidDateFormatError;
