import { ILocationValueObjectProps } from '../../../shared/domain/value-objects/LocationValueObject';
import { HostUserId } from '../../../users/host/domain/value-objects/HostUserId';
import { Facility } from '../../shared/domain/Facility';
import { ICourt } from './ICourt';
import { CourtCreatedAt } from './value-objects/CourtCreatedAt';
import { CourtEstablishmentDate } from './value-objects/CourtEstablishmentDate';
import { CourtFacilityId } from './value-objects/CourtFacilityId';
import { CourtHoopHeight } from './value-objects/CourtHoopHeight';
import { CourtId } from './value-objects/CourtId';
import { CourtLocation } from './value-objects/CourtLocation';
import { CourtOfficialName } from './value-objects/CourtOfficialName';
import { CourtSurface } from './value-objects/CourtSurface';
import { CourtUpdatedAt } from './value-objects/CourtUpdatedAt';

export class Court extends Facility<ICourt> {
  readonly #surface: CourtSurface;

  readonly #hoopHeight: CourtHoopHeight;

  readonly #facilityId: CourtFacilityId;

  constructor(
    id: string,
    officialName: string,
    establishmentDate: string,
    surface: string,
    hoopHeight: number,
    registeredById: string,
    location: ILocationValueObjectProps,
    facilityId: string | null,
    createdAt: string,
    updatedAt: string,
  ) {
    super(
      new CourtId(id),
      new CourtOfficialName(officialName),
      new CourtLocation(location),
      new CourtEstablishmentDate(establishmentDate),
      new HostUserId(registeredById, 'registeredById'),
      new CourtCreatedAt(createdAt),
      new CourtUpdatedAt(updatedAt),
    );

    this.#surface = new CourtSurface(surface);
    this.#hoopHeight = new CourtHoopHeight(hoopHeight);
    this.#facilityId = new CourtFacilityId(facilityId);
  }

  public toPrimitives(): ICourt {
    return {
      id: this.id.value,
      officialName: this.officialName.value,
      establishmentDate: this.establishmentDate.value,
      surface: this.#surface.value,
      hoopHeight: this.#hoopHeight.value,
      registeredById: this.registeredById.value,
      location: this.location.value,
      facilityId: this.#facilityId.facilityIdAsStringOrNull,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }
}
