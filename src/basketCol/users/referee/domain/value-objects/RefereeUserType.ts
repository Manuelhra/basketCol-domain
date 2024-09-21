import { UserType } from '../../../shared/domain/value-objects/UserType';

export class RefereeUserType extends UserType {
  protected readonly TYPE: string = 'REFEREE_USER';

  constructor() {
    super(RefereeUserType.value);
  }

  public static override get value(): string {
    return 'REFEREE_USER';
  }
}
