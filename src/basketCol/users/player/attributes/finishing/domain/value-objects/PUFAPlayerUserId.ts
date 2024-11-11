import { IdValueObject } from '../../../../../../shared/domain/value-objects/IdValueObject';

export class PUFAPlayerUserId extends IdValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): PUFAPlayerUserId {
    return new PUFAPlayerUserId(value);
  }
}
