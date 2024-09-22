import { UserType } from '../../../shared/domain/value-objects/UserType';

export class RefereeUserType extends UserType {
  protected static override readonly TYPE: string = 'REFEREE_USER';

  constructor() {
    super(RefereeUserType.TYPE);
  }

  public static create(): RefereeUserType {
    return new RefereeUserType();
  }

  public static override get value(): string {
    return RefereeUserType.TYPE;
  }
}
