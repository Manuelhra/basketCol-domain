import { NullableString } from '../../../../shared/domain/value-objects/NullableString';

export class TeamPlayerPosition extends NullableString {
  private constructor(value: string | null) {
    super(value, 'position');
  }

  public static create(value: string | null): TeamPlayerPosition {
    return new TeamPlayerPosition(value);
  }
}
