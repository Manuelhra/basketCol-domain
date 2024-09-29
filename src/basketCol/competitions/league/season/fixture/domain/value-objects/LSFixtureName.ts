import { FixtureName } from '../../../../../shared/domain/value-objects/FixtureName';

export class LSFixtureName extends FixtureName {
  private constructor(value: string | null) {
    super(value);
  }

  public static create(value: string | null): LSFixtureName {
    return new LSFixtureName(value);
  }
}
