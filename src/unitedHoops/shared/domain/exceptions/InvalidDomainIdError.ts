import RootError from './RootError';

class InvalidDomainIdError extends RootError {
  constructor(id: string) {
    const message = `The ID "${id}" violates the domain policy`;
    super(message);
    this.name = 'InvalidDomainIdError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}

export default InvalidDomainIdError;
