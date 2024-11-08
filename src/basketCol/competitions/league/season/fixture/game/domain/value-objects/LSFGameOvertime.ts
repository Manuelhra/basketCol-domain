import { FGameOvertime } from '../../../../../../shared/domain/value-objects/FGameOvertime';

export class LSFGameOvertime extends FGameOvertime {
  private constructor(value: boolean) {
    super(value);
  }

  public static create(value: boolean): LSFGameOvertime {
    return new LSFGameOvertime(value);
  }
}
