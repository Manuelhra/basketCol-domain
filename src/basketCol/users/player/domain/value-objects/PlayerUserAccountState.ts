import { UserAccountState } from '../../../shared/domain/value-objects';

export class PlayerUserAccountState extends UserAccountState {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): PlayerUserAccountState {
    return new PlayerUserAccountState(value);
  }
}
