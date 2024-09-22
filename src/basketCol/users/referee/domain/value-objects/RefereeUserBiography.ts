import { UserBiography } from '../../../shared/domain/value-objects/UserBiography';

export class RefereeUserBiography extends UserBiography {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): RefereeUserBiography {
    return new RefereeUserBiography(value);
  }
}
