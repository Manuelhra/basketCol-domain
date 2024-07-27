import { CreatedAtValueObject } from '../../../../shared/domain/value-objects/CreatedAtValueObject';

export class LeagueCreatedAt extends CreatedAtValueObject {
  public constructor(value: string) {
    super(value);
  }
}
