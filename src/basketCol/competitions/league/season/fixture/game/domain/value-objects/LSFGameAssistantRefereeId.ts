import { FGameAssistantRefereeId } from '../../../../../../shared/domain/value-objects/FGameAssistantRefereeId';

export class LSFGameAssistantRefereeId extends FGameAssistantRefereeId {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): LSFGameAssistantRefereeId {
    return new LSFGameAssistantRefereeId(value);
  }
}
