import { AggregateRoot } from '../../../shared/domain/AggregateRoot';
import { HostUserId } from '../../../users/host/domain/value-objects/HostUserId';
import { IFacility } from './IFacility';
import { FacilityCreatedAt } from './value-objects/FacilityCreatedAt';
import { FacilityEstablishmentDate } from './value-objects/FacilityEstablishmentDate';
import { FacilityId } from './value-objects/FacilityId';
import { FacilityLocation } from './value-objects/FacilityLocation';
import { FacilityOfficialName } from './value-objects/FacilityOfficialName';
import { FacilityUpdatedAt } from './value-objects/FacilityUpdatedAt';

export abstract class Facility<I extends IFacility> extends AggregateRoot<I> {
  protected readonly officialName: FacilityOfficialName;

  protected readonly location: FacilityLocation;

  protected readonly establishmentDate: FacilityEstablishmentDate;

  protected readonly registeredById: HostUserId;

  constructor(
    id: FacilityId,
    officialName: FacilityOfficialName,
    location: FacilityLocation,
    establishmentDate: FacilityEstablishmentDate,
    registeredById: HostUserId,
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
