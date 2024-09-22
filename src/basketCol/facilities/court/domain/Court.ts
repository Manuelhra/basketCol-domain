import { ILocationValueObjectProps } from '../../../shared/domain/value-objects/LocationValueObject';
import { Facility } from '../../shared/domain/Facility';
import { ICourt } from './ICourt';
import { CourtCreatedAt } from './value-objects/CourtCreatedAt';
import { CourtEstablishmentDate } from './value-objects/CourtEstablishmentDate';
import { CourtHoopHeight } from './value-objects/CourtHoopHeight';
import { CourtId } from './value-objects/CourtId';
import { CourtLocation } from './value-objects/CourtLocation';
import { CourtNullableFacilityId } from './value-objects/CourtNullableFacilityId';
import { CourtOfficialName } from './value-objects/CourtOfficialName';
import { CourtRegisteredById } from './value-objects/CourtRegisteredById';
import { CourtSurface } from './value-objects/CourtSurface';
import { CourtUpdatedAt } from './value-objects/CourtUpdatedAt';

export class Court extends Facility<ICourt> {
  readonly #surface: CourtSurface;

  readonly #hoopHeight: CourtHoopHeight;

  readonly #facilityId: CourtNullableFacilityId;

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
      CourtId.create(id),
      CourtOfficialName.create(officialName),
      CourtLocation.create(location),
      CourtEstablishmentDate.create(establishmentDate),
      CourtRegisteredById.create(registeredById),
      CourtCreatedAt.create(createdAt),
      CourtUpdatedAt.create(updatedAt),
    );

    this.#surface = CourtSurface.create(surface);
    this.#hoopHeight = CourtHoopHeight.create(hoopHeight);
    this.#facilityId = CourtNullableFacilityId.create(facilityId);
  }

  public override toPrimitives(): ICourt {
    return {
      id: this.id.value,
      officialName: this.officialName.value,
      establishmentDate: this.establishmentDate.value,
      surface: this.#surface.value,
      hoopHeight: this.#hoopHeight.value,
      registeredById: this.registeredById.hostUserIdAsString,
      location: this.location.value,
      facilityId: this.#facilityId.facilityIdAsStringOrNull,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }

  public static override create(
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
  ): Court {
    return new Court(
      id,
      officialName,
      establishmentDate,
      surface,
      hoopHeight,
      registeredById,
      location,
      facilityId,
      createdAt,
      updatedAt,
    );
  }
}
