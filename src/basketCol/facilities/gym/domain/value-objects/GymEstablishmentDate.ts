import { FacilityEstablishmentDate } from '../../../shared/domain/value-objects/FacilityEstablishmentDate';

export class GymEstablishmentDate extends FacilityEstablishmentDate {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): GymEstablishmentDate {
    return new GymEstablishmentDate(value);
  }
}
