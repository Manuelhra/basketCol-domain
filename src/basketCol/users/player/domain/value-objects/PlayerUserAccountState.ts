import { UserAccountState } from '../../../shared/domain/value-objects';

export class PlayerUserAccountState extends UserAccountState {
  public constructor(value: string) {
    super(value);
  }
}
