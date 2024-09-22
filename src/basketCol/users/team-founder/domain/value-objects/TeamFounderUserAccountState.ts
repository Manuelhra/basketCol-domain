import { UserAccountState } from '../../../shared/domain/value-objects';

export class TeamFounderUserAccountState extends UserAccountState {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): TeamFounderUserAccountState {
    return new TeamFounderUserAccountState(value);
  }
}
