class PropertyLengthExceededError extends Error {
  constructor(propertyName: string, maxLength: number, currentLength: number) {
    const message = `Length constraint violation: '${propertyName}' exceeds maximum length. Allowed: ${maxLength}, Actual: ${currentLength}.`;
    super(message);
    this.name = 'PropertyLengthExceededError';
  }
}

export default PropertyLengthExceededError;
