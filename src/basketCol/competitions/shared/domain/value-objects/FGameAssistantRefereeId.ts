import { IdValueObject } from '../../../../shared/domain/value-objects/IdValueObject';

export abstract class FGameAssistantRefereeId extends IdValueObject {
  protected constructor(value: string) {
    super(value, 'assistantRefereeId');
  }
}
