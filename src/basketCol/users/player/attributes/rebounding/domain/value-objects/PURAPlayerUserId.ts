import { IdValueObject } from '../../../../../../shared/domain/value-objects/IdValueObject';

export class PURAPlayerUserId extends IdValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): PURAPlayerUserId {
    return new PURAPlayerUserId(value);
  }
}
