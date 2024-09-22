import { UserAccountState } from '../../../shared/domain/value-objects/UserAccountState';

export class HostUserAccountState extends UserAccountState {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): HostUserAccountState {
    return new HostUserAccountState(value);
  }
}
