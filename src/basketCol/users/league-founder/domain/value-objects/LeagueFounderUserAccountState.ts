import { UserAccountState } from '../../../shared/domain/value-objects';

export class LeagueFounderUserAccountState extends UserAccountState {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): LeagueFounderUserAccountState {
    return new LeagueFounderUserAccountState(value);
  }
}
