import { IdValueObject } from '../../../../../../shared/domain/value-objects/IdValueObject';

export class LSABestTwoPointShooterId extends IdValueObject {
  private constructor(value: string) {
    super(value, 'bestTwoPointShooterId');
  }

  public static create(value: string): LSABestTwoPointShooterId {
    return new LSABestTwoPointShooterId(value);
  }
}
