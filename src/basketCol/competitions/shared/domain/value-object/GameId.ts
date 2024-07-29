import { IdValueObject } from '../../../../shared/domain/value-objects/IdValueObject';

export abstract class GameId extends IdValueObject {
  protected constructor(value: string) {
    super(value);
  }
}
