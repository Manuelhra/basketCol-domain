import { NullableDate } from '../../../../shared/domain/value-objects/NullableDate';

export class TeamLeagueLastPromotionDate extends NullableDate {
  private constructor(value: string | null) {
    super(value, 'lastPromotionDate');
  }

  public static create(value: string | null): TeamLeagueLastPromotionDate {
    return new TeamLeagueLastPromotionDate(value);
  }
}
