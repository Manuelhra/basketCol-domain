import { UuidValueObject } from '../../../../shared/domain/value-objects/UuidValueObject';

export abstract class UserId extends UuidValueObject {
  protected constructor(value: string, propertyName = 'id') {
    super(value, propertyName);
  }
}
