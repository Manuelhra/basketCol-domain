import { CreatedAtValueObject } from '../../../../shared/domain/value-objects/CreatedAtValueObject';

export abstract class GameCreatedAt extends CreatedAtValueObject {
  protected constructor(value: string) {
    super(value);
  }
}
