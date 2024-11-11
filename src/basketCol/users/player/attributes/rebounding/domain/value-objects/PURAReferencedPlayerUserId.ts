import { IdValueObject } from '../../../../../../shared/domain/value-objects/IdValueObject';

export class PURAReferencedPlayerUserId extends IdValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): PURAReferencedPlayerUserId {
    return new PURAReferencedPlayerUserId(value);
  }
}
