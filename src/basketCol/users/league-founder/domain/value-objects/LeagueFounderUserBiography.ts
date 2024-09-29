import { UserBiography } from '../../../shared/domain/value-objects/UserBiography';

export class LeagueFounderUserBiography extends UserBiography {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): LeagueFounderUserBiography {
    return new LeagueFounderUserBiography(value);
  }
}
