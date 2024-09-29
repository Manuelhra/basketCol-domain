import { FGameType } from '../../../../../../shared/domain/value-objects/FGameType';

export class LSFGameType extends FGameType {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): LSFGameType {
    return new LSFGameType(value);
  }
}
