import { MinutesDurationValueObject } from '../../../../shared/domain/value-objects/MinutesDurationValueObject';

export abstract class FGameDuration extends MinutesDurationValueObject {
  protected constructor(value: number) {
    super(value, 'gameDuration');
  }
}
