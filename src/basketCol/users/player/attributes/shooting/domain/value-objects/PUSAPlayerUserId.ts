import { IdValueObject } from '../../../../../../shared/domain/value-objects/IdValueObject';

export class PUSAPlayerUserId extends IdValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): PUSAPlayerUserId {
    return new PUSAPlayerUserId(value);
  }
}
