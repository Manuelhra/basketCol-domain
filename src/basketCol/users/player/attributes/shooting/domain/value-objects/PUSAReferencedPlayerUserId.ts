import { IdValueObject } from '../../../../../../shared/domain/value-objects/IdValueObject';

export class PUSAReferencedPlayerUserId extends IdValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): PUSAReferencedPlayerUserId {
    return new PUSAReferencedPlayerUserId(value);
  }
}
