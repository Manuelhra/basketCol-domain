import { IdValueObject } from '../../../../shared/domain/value-objects/IdValueObject';

export class FGameId extends IdValueObject {
  protected constructor(value: string) {
    super(value);
  }

  public static create(value: string): FGameId {
    return new FGameId(value);
  }
}
