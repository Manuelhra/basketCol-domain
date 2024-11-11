import { IdValueObject } from '../../../../shared/domain/value-objects/IdValueObject';

export abstract class FGameCourtId extends IdValueObject {
  protected constructor(value: string) {
    super(value, 'courtId');
  }
}
