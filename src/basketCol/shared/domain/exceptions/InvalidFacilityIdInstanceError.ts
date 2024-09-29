import { RootError } from './RootError';

export class InvalidFacilityIdInstanceError extends RootError {
  private constructor() {
    const message = 'Value is not an instance of FacilityId';
    super(message);
    this.name = 'InvalidFacilityIdInstanceError';
  }

  public static create(): InvalidFacilityIdInstanceError {
    return new InvalidFacilityIdInstanceError();
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
