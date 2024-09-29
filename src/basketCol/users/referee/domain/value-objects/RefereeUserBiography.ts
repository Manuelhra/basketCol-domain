import { UserBiography } from '../../../shared/domain/value-objects/UserBiography';

export class RefereeUserBiography extends UserBiography {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): RefereeUserBiography {
    return new RefereeUserBiography(value);
  }
}
