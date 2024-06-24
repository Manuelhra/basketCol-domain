class ElementAlreadyDisabledError extends Error {
  constructor(elementType: string) {
    const message = `Invalid operation: ${elementType} is already in a disabled state.`;
    super(message);

    this.name = 'ElementAlreadyDisabledError';
  }
}

export default ElementAlreadyDisabledError;
