import { FacilityEstablishmentDate } from '../../../shared/domain/value-objects/FacilityEstablishmentDate';

export class GymEstablishmentDate extends FacilityEstablishmentDate {
  public constructor(value: string) {
    super(value);
  }
}
