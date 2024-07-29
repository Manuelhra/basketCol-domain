import { UpdatedAtValueObject } from '../../../../shared/domain/value-objects/UpdatedAtValueObject';

export abstract class GameUpdatedAt extends UpdatedAtValueObject {
  protected constructor(value: string) {
    super(value);
  }
}
