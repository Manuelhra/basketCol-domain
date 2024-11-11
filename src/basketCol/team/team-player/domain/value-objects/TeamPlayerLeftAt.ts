import { NullableDate } from '../../../../shared/domain/value-objects/NullableDate';

export class TeamPlayerLeftAt extends NullableDate {
  private constructor(value: string | null) {
    super(value, 'leftAt');
  }

  public static create(value: string | null): TeamPlayerLeftAt {
    return new TeamPlayerLeftAt(value);
  }
}
