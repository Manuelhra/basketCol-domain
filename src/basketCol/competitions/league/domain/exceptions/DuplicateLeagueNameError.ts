import { RootError } from '../../../../shared/domain/exceptions/RootError';
import { LeagueName } from '../value-objects/LeagueName';

export class DuplicateLeagueNameError extends RootError {
  private constructor(leagueName: LeagueName, label: 'SHORT_NAME' | 'OFFICIAL_NAME') {
    let feedback: string;
    const { short, official } = leagueName.value;

    switch (label) {
      case 'SHORT_NAME':
        feedback = `Uniqueness violation: league short name <${short}> already exists in the repository`;

        break;
      case 'OFFICIAL_NAME':
        feedback = `Uniqueness violation: league short name <${official}> already exists in the repository`;

        break;
      default: throw new Error(`Invalid action: The exception DuplicateLeagueNameError does not allow this value <${label}> as the second parameter`);
    }

    super(feedback);
    this.name = 'DuplicateLeagueNameError';
  }

  public static create(leagueName: LeagueName, label: 'SHORT_NAME' | 'OFFICIAL_NAME'): DuplicateLeagueNameError {
    return new DuplicateLeagueNameError(leagueName, label);
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
