import { IdValueObject } from '../../../../shared/domain/value-objects/IdValueObject';

export abstract class FacilityRegisteredBy extends IdValueObject {
  protected constructor(value: string) {
    super(value, 'registeredById');
  }
}
