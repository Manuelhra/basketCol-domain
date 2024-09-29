import { FGameAwayTeamId } from '../../../../../../shared/domain/value-objects/FGameAwayTeamId';

export class LSFGameAwayTeamId extends FGameAwayTeamId {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): LSFGameAwayTeamId {
    return new LSFGameAwayTeamId(value);
  }
}
