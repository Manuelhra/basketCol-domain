import { IdValueObject } from '../../../../../../shared/domain/value-objects/IdValueObject';

export class LSABestThreePointShooterId extends IdValueObject {
  private constructor(value: string) {
    super(value, 'bestThreePointShooterId');
  }

  public static create(value: string): LSABestThreePointShooterId {
    return new LSABestThreePointShooterId(value);
  }
}
