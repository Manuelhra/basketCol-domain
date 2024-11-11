import { NullableString } from '../../../../shared/domain/value-objects/NullableString';

export class TeamLeagueDivisionLevel extends NullableString {
  private constructor(value: string | null) {
    super(value, 'divisionLevel');
  }

  public static create(value: string | null): TeamLeagueDivisionLevel {
    return new TeamLeagueDivisionLevel(value);
  }
}
