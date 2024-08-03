import { IdValueObject } from '../../../../shared/domain/value-objects/IdValueObject';

export class FGameId extends IdValueObject {
  public constructor(value: string) {
    super(value);
  }
}
