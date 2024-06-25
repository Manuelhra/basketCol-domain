class InvalidUserTypeError extends Error {
  constructor(type: string) {
    const message = `Invalid user type: '${type}' is not a valid user type in the system.`;
    super(message);
    this.name = 'InvalidUserTypeError';
  }
}

export default InvalidUserTypeError;
