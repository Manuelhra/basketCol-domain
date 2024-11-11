import { NullablePositiveIntegerValueObject } from '../../../../shared/domain/value-objects/NullablePositiveIntegerValueObject';

export class TeamPlayerJerseyNumber extends NullablePositiveIntegerValueObject {
  private constructor(value: number | null) {
    super(value, 'jerseyNumber');
  }

  public static create(value: number | null): TeamPlayerJerseyNumber {
    return new TeamPlayerJerseyNumber(value);
  }
}
