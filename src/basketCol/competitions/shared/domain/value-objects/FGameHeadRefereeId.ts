import { IdValueObject } from '../../../../shared/domain/value-objects/IdValueObject';

export abstract class FGameHeadRefereeId extends IdValueObject {
  protected constructor(value: string) {
    super(value, 'headRefereeId');
  }
}
