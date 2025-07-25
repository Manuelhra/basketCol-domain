import { FGameCreatedAt } from '../../../../../../shared/domain/value-objects/FGameCreatedAt';

export class LSFGameCreatedAt extends FGameCreatedAt {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): LSFGameCreatedAt {
    return new LSFGameCreatedAt(value);
  }
}
