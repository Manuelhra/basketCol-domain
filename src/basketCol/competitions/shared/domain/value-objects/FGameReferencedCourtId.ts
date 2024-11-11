import { IdValueObject } from '../../../../shared/domain/value-objects/IdValueObject';

export abstract class FGameReferencedCourtId extends IdValueObject {
  protected constructor(value: string) {
    super(value, 'courtId');
  }
}
