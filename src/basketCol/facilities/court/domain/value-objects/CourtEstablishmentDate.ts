import { FacilityEstablishmentDate } from '../../../shared/domain/value-objects/FacilityEstablishmentDate';

export class CourtEstablishmentDate extends FacilityEstablishmentDate {
  public constructor(value: string) {
    super(value);
  }
}
