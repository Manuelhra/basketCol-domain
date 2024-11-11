import { IdValueObject } from '../../../../../../shared/domain/value-objects/IdValueObject';

export class PUPAPlayerUserId extends IdValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): PUPAPlayerUserId {
    return new PUPAPlayerUserId(value);
  }
}
