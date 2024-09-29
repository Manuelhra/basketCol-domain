import { AggregateRoot } from '../../../shared/domain/AggregateRoot';
import { IFacilityPrimitives } from './IFacilityPrimitives';
import { FacilityCreatedAt } from './value-objects/FacilityCreatedAt';
import { FacilityEstablishmentDate } from './value-objects/FacilityEstablishmentDate';
import { FacilityId } from './value-objects/FacilityId';
import { FacilityLocation } from './value-objects/FacilityLocation';
import { FacilityOfficialName } from './value-objects/FacilityOfficialName';
import { FacilityRegisteredBy } from './value-objects/FacilityRegisteredBy';
import { FacilityUpdatedAt } from './value-objects/FacilityUpdatedAt';

export abstract class Facility<I extends IFacilityPrimitives> extends AggregateRoot<I> {
  protected readonly officialName: FacilityOfficialName;

  protected readonly location: FacilityLocation;

  protected readonly establishmentDate: FacilityEstablishmentDate;

  protected readonly registeredById: FacilityRegisteredBy;

  protected constructor(
    id: FacilityId,
    officialName: FacilityOfficialName,
    location: FacilityLocation,
    establishmentDate: FacilityEstablishmentDate,
    registeredById: FacilityRegisteredBy,
    createdAt: FacilityCreatedAt,
    updatedAt: FacilityUpdatedAt,
  ) {
    super(id, createdAt, updatedAt);

    this.officialName = officialName;
    this.location = location;
    this.establishmentDate = establishmentDate;
    this.registeredById = registeredById;
  }
}
