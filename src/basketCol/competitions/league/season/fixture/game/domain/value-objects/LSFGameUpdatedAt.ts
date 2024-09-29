import { FGameUpdatedAt } from '../../../../../../shared/domain/value-objects/FGameUpdatedAt';

export class LSFGameUpdatedAt extends FGameUpdatedAt {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): LSFGameUpdatedAt {
    return new LSFGameUpdatedAt(value);
  }
}
