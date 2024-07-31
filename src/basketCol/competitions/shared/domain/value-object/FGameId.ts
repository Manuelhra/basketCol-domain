import { IdValueObject } from '../../../../shared/domain/value-objects/IdValueObject';

export abstract class FGameId extends IdValueObject {
  protected constructor(value: string) {
    super(value);
  }
}
