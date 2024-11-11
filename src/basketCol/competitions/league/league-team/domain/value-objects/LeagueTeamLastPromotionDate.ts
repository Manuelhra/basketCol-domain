import { NullableDate } from '../../../../../shared/domain/value-objects/NullableDate';

export class LeagueTeamLastPromotionDate extends NullableDate {
  private constructor(value: string | null) {
    super(value, 'lastPromotionDate');
  }

  public static create(value: string | null): LeagueTeamLastPromotionDate {
    return new LeagueTeamLastPromotionDate(value);
  }
}
