class InvalidPropertyTypeError extends Error {
  constructor(propertyName: string, expectedType: string, receivedType: string) {
    const message = `Invalid type for property '${propertyName}': expected ${expectedType}, but received ${receivedType}.`;
    super(message);
    this.name = 'InvalidPropertyTypeError';
  }
}

export default InvalidPropertyTypeError;
