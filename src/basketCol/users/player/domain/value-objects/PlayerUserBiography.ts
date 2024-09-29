import { UserBiography } from '../../../shared/domain/value-objects/UserBiography';

export class PlayerUserBiography extends UserBiography {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): PlayerUserBiography {
    return new PlayerUserBiography(value);
  }
}
