import { IdValueObject } from '../../../../../../shared/domain/value-objects/IdValueObject';

export class LSAMostValuablePlayerId extends IdValueObject {
  private constructor(value: string) {
    super(value, 'mostValuablePlayerId');
  }

  public static create(value: string): LSAMostValuablePlayerId {
    return new LSAMostValuablePlayerId(value);
  }
}
