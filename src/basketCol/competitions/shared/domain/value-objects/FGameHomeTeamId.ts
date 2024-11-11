import { IdValueObject } from '../../../../shared/domain/value-objects/IdValueObject';

export abstract class FGameHomeTeamId extends IdValueObject {
  protected constructor(value: string) {
    super(value, 'homeTeamId');
  }
}
