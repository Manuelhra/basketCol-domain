import { UpdatedAtValueObject } from '../../../../../shared/domain/value-objects/UpdatedAtValueObject';

export class LeagueSeasonUpdatedAt extends UpdatedAtValueObject {
  public constructor(value: string) {
    super(value);
  }
}
