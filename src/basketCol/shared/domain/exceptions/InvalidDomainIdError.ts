import { RootError } from './RootError';

export class InvalidDomainIdError extends RootError {
  constructor(id: string) {
    const message = `The ID "${id}" violates the domain policy`;
    super(message);
    this.name = 'InvalidDomainIdError';
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
