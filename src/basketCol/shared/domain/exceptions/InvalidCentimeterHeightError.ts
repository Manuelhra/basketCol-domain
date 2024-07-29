import { RootError } from './RootError';

export class InvalidCentimeterHeightError extends RootError {
  constructor(private readonly invalidValue: number) {
    super(`Invalid height value in centimeters: ${invalidValue}. Height must be a non-negative integer.`);
    this.name = 'InvalidCentimeterHeightError';
  }

  public getInvalidValue(): number {
    return this.invalidValue;
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
