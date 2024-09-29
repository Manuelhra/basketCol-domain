import { RootError } from './RootError';

export class InvalidCentimeterHeightError extends RootError {
  private constructor(private readonly invalidValue: number) {
    super(`Invalid height value in centimeters: ${invalidValue}. Height must be a non-negative integer.`);
    this.name = 'InvalidCentimeterHeightError';
  }

  public static create(invalidValue: number): InvalidCentimeterHeightError {
    return new InvalidCentimeterHeightError(invalidValue);
  }

  public getInvalidValue(): number {
    return this.invalidValue;
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
