import { UserType } from '../../../shared/domain/value-objects/UserType';

export class PlayerUserType extends UserType {
  protected readonly TYPE: string = 'PLAYER_USER';

  constructor() {
    super(PlayerUserType.value);
  }

  public static override get value(): string {
    return 'PLAYER_USER';
  }
}
