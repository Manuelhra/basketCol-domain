import { RootError } from './RootError';

export class InvalidFacilityIdInstanceError extends RootError {
  constructor() {
    const message = 'Value is not an instance of FacilityId';
    super(message);
    this.name = 'InvalidFacilityIdInstanceError';
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
