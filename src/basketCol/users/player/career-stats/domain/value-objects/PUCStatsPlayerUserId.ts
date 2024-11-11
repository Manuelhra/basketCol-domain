import { IdValueObject } from '../../../../../shared/domain/value-objects/IdValueObject';

export class PUCStatsPlayerUserId extends IdValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): PUCStatsPlayerUserId {
    return new PUCStatsPlayerUserId(value);
  }
}
