import { IdListValueObject } from '../../../../../shared/domain/value-objects/IdListValueObject';

export class LeagueSeasonCourtIdList extends IdListValueObject {
  private constructor(value: string[]) {
    super(value, 'courtIdList');
  }

  public static create(value: string[]): LeagueSeasonCourtIdList {
    return new LeagueSeasonCourtIdList(value);
  }
}
