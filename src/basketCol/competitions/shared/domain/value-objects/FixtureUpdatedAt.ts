import { UpdatedAtValueObject } from '../../../../shared/domain/value-objects/UpdatedAtValueObject';

export abstract class FixtureUpdatedAt extends UpdatedAtValueObject {
  protected constructor(value: string) {
    super(value);
  }
}
