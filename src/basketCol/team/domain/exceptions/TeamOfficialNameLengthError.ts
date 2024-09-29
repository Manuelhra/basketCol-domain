import { RootError } from '../../../shared/domain/exceptions/RootError';

export class TeamOfficialNameLengthError extends RootError {
  private constructor(officialName: string, minLength: number, maxLength: number) {
    super(`Invalid team official name length: The name '${officialName}' must be between ${minLength} and ${maxLength} characters long.`);

    this.name = 'TeamOfficialNameLengthError';
  }

  public static create(officialName: string, minLength: number, maxLength: number): TeamOfficialNameLengthError {
    return new TeamOfficialNameLengthError(officialName, minLength, maxLength);
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
