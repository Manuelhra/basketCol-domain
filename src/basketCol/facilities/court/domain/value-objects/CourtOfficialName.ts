import { StringValueObject } from '../../../../shared/domain/value-objects/StringValueObject';

export class CourtOfficialName extends StringValueObject {
  constructor(value: string) {
    super(value, 'officialName');
  }
}
