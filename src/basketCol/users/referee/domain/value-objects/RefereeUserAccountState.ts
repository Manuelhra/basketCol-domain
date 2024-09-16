import { UserAccountState } from '../../../shared/domain/value-objects';

export class RefereeUserAccountState extends UserAccountState {
  public constructor(value: string) {
    super(value);
  }
}
