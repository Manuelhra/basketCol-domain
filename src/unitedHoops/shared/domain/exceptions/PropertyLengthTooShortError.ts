class PropertyLengthTooShortError extends Error {
  constructor(propertyName: string, minLength: number, currentLength: number) {
    const message = `Length constraint violation: '${propertyName}' does not meet minimum length requirement. Required: ${minLength}, Actual: ${currentLength}.`;
    super(message);
    this.name = 'PropertyLengthTooShortError';
  }
}

export default PropertyLengthTooShortError;
