import { UserBiography } from '../../../shared/domain/value-objects/UserBiography';

export class PlayerUserBiography extends UserBiography {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): PlayerUserBiography {
    return new PlayerUserBiography(value);
  }
}
