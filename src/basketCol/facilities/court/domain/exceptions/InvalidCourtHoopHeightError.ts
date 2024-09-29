import { RootError } from '../../../../shared/domain/exceptions/RootError';

export class InvalidCourtHoopHeightError extends RootError {
  private constructor(invalidHeight: number, minHeight: number, maxHeight: number) {
    const message = `Invalid court hoop height: ${invalidHeight} cm. Height must be between ${minHeight} cm and ${maxHeight} cm.`;
    super(message);
    this.name = 'InvalidCourtHoopHeightError';
  }

  public static create(invalidHeight: number, minHeight: number, maxHeight: number): InvalidCourtHoopHeightError {
    return new InvalidCourtHoopHeightError(invalidHeight, minHeight, maxHeight);
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
