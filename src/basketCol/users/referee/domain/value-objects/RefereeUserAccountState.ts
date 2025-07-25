import { UserAccountState } from '../../../shared/domain/value-objects';

export class RefereeUserAccountState extends UserAccountState {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): RefereeUserAccountState {
    return new RefereeUserAccountState(value);
  }
}
