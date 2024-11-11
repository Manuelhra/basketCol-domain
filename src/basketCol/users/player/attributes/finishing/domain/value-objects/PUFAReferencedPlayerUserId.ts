import { IdValueObject } from '../../../../../../shared/domain/value-objects/IdValueObject';

export class PUFAReferencedPlayerUserId extends IdValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): PUFAReferencedPlayerUserId {
    return new PUFAReferencedPlayerUserId(value);
  }
}
