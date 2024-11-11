import { StringArrayValueObject } from './StringArrayValueObject';
import { UuidValueObject } from './UuidValueObject';

export abstract class IdListValueObject extends StringArrayValueObject {
  protected constructor(value: string[], propertyName: string) {
    super(value, propertyName);

    this.#ensureIsValidIdList(value);
  }

  #ensureIsValidIdList(idList: string[]): void {
    idList.forEach((id) => UuidValueObject.ensureIsValidUuid(id));
  }
}
