import { UserBiography } from '../../../shared/domain/value-objects/UserBiography';

export class TeamFounderUserBiography extends UserBiography {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): TeamFounderUserBiography {
    return new TeamFounderUserBiography(value);
  }
}
