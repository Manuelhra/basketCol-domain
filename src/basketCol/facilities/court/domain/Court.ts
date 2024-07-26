import { AggregateRoot } from '../../../shared/domain/AggregateRoot';
import { ILocationValueObjectProps } from '../../../shared/domain/value-objects/LocationValueObject';
import { HostUserId } from '../../../users/host/domain/value-objects/HostUserId';
import { GymId } from '../../gym/domain/value-objects/GymId';
import { ICourt } from './ICourt';
import { CourtCreatedAt } from './value-objects/CourtCreatedAt';
import { CourtEstablishmentDate } from './value-objects/CourtEstablishmentDate';
import { CourtHoopHeight } from './value-objects/CourtHoopHeight';
import { CourtId } from './value-objects/CourtId';
import { CourtLocation } from './value-objects/CourtLocation';
import { CourtOfficialName } from './value-objects/CourtOfficialName';
import { CourtSurface } from './value-objects/CourtSurface';
import { CourtUpdatedAt } from './value-objects/CourtUpdatedAt';

export class Court extends AggregateRoot<ICourt> {
  readonly #officialName: CourtOfficialName;

  readonly #establishmentDate: CourtEstablishmentDate;

  readonly #surface: CourtSurface;

  readonly #hoopHeight: CourtHoopHeight;

  readonly #registeredById: HostUserId;

  readonly #location: CourtLocation;

  readonly #gymId: GymId | null;

  constructor(
    id: string,
    officialName: string,
    establishmentDate: string,
    surface: string,
    hoopHeight: number,
    registeredById: string,
    location: ILocationValueObjectProps,
    gymId: string | null,
    createdAt: string,
    updatedAt: string,
  ) {
    const courtId: CourtId = new CourtId(id);
    const courtCreatedAt: CourtCreatedAt = new CourtCreatedAt(createdAt);
    const courtUpdatedAt: CourtUpdatedAt = new CourtCreatedAt(updatedAt);

    super(courtId, courtCreatedAt, courtUpdatedAt);

    this.#officialName = new CourtOfficialName(officialName);
    this.#establishmentDate = new CourtEstablishmentDate(establishmentDate);
    this.#surface = new CourtSurface(surface);
    this.#hoopHeight = new CourtHoopHeight(hoopHeight);
    this.#registeredById = new HostUserId(registeredById, 'registeredById');
    this.#location = new CourtLocation(location);

    if (typeof gymId === 'string' && gymId !== null) {
      this.#gymId = new GymId(gymId, 'gymId');
    } else {
      this.#gymId = null;
    }
  }

  public toPrimitives(): ICourt {
    return {
      id: this.id.value,
      officialName: this.#officialName.value,
      establishmentDate: this.#establishmentDate.value,
      surface: this.#surface.value,
      hoopHeight: this.#hoopHeight.value,
      registeredById: this.#registeredById.value,
      location: this.#location.value,
      gymId: this.#gymId === null ? this.#gymId : this.#gymId.value,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }
}
