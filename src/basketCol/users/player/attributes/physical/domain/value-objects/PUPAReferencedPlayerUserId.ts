import { IdValueObject } from '../../../../../../shared/domain/value-objects/IdValueObject';

export class PUPAReferencedPlayerUserId extends IdValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): PUPAReferencedPlayerUserId {
    return new PUPAReferencedPlayerUserId(value);
  }
}
