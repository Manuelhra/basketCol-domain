import { IdValueObject } from '../../../../../../shared/domain/value-objects/IdValueObject';

export class LSABestOffensiveRebounderId extends IdValueObject {
  private constructor(value: string) {
    super(value, 'bestOffensiveRebounderId');
  }

  public static create(value: string): LSABestOffensiveRebounderId {
    return new LSABestOffensiveRebounderId(value);
  }
}
