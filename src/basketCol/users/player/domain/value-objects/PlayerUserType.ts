import { UserType } from '../../../shared/domain/value-objects/UserType';

export class PlayerUserType extends UserType {
  protected static override readonly TYPE: string = 'PLAYER_USER';

  private constructor() {
    super(PlayerUserType.TYPE);
  }

  public static create(): PlayerUserType {
    return new PlayerUserType();
  }

  public static override get value(): string {
    return PlayerUserType.TYPE;
  }
}
