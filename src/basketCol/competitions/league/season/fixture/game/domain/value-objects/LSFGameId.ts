import { FGameId } from '../../../../../../shared/domain/value-objects/FGameId';

export class LSFGameId extends FGameId {
  public constructor(value: string) {
    super(value);
  }
}
