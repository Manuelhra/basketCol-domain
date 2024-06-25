class InvalidDomainIdError extends Error {
  constructor(id: string) {
    const message = `The ID "${id}" violates the domain policy`;
    super(message);
    this.name = 'InvalidDomainIdError';
  }
}

export default InvalidDomainIdError;
