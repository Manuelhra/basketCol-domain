import { RootError } from './RootError';

export class InvalidDomainIdError extends RootError {
  private constructor(id: string) {
    const message = `The ID "${id}" violates the domain policy`;
    super(message);
    this.name = 'InvalidDomainIdError';
  }

  public static create(id: string): InvalidDomainIdError {
    return new InvalidDomainIdError(id);
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
