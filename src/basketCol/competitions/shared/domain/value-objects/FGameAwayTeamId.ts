import { IdValueObject } from '../../../../shared/domain/value-objects/IdValueObject';

export abstract class FGameAwayTeamId extends IdValueObject {
  protected constructor(value: string) {
    super(value, 'awayTeamId');
  }
}
