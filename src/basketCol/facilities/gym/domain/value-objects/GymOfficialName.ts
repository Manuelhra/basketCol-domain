import { StringValueObject } from '../../../../shared/domain/value-objects/StringValueObject';

export class GymOfficialName extends StringValueObject {
  constructor(value: string) {
    super(value, 'officialName');
  }
}
