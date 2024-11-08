import { BooleanValueObject } from '../../../../shared/domain/value-objects/BooleanValueObject';

export abstract class FGameOvertime extends BooleanValueObject {
  protected constructor(value: boolean) {
    super(value, 'overtime');
  }
}
