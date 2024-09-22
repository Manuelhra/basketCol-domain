import { FGameHomeTeamId } from '../../../../../../shared/domain/value-objects/FGameHomeTeamId';

export class LSFGameHomeTeamId extends FGameHomeTeamId {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): LSFGameHomeTeamId {
    return new LSFGameHomeTeamId(value);
  }
}
