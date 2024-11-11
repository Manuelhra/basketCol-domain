import { IdValueObject } from '../../../../../../shared/domain/value-objects/IdValueObject';

export class LSABestFreeThrowShooterId extends IdValueObject {
  private constructor(value: string) {
    super(value, 'bestFreeThrowShooterId');
  }

  public static create(value: string): LSABestFreeThrowShooterId {
    return new LSABestFreeThrowShooterId(value);
  }
}
