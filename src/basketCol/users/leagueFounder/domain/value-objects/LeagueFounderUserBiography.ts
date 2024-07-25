import { UserBiography } from '../../../shared/domain/value-objects/UserBiography';

export class LeagueFounderUserBiography extends UserBiography {
  public constructor(value: string) {
    super(value);
  }
}
