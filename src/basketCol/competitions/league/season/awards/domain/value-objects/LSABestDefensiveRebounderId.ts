import { IdValueObject } from '../../../../../../shared/domain/value-objects/IdValueObject';

export class LSABestDefensiveRebounderId extends IdValueObject {
  private constructor(value: string) {
    super(value, 'bestDefensiveRebounderId');
  }

  public static create(value: string): LSABestDefensiveRebounderId {
    return new LSABestDefensiveRebounderId(value);
  }
}
