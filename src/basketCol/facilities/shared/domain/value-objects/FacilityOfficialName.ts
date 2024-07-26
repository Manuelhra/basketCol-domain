import { StringValueObject } from '../../../../shared/domain/value-objects/StringValueObject';

export abstract class FacilityOfficialName extends StringValueObject {
  protected constructor(value: string) {
    super(value, 'officialName');
  }
}
