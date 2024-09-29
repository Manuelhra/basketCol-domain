import { UserBiography } from '../../../shared/domain/value-objects/UserBiography';

export class TeamFounderUserBiography extends UserBiography {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): TeamFounderUserBiography {
    return new TeamFounderUserBiography(value);
  }
}
