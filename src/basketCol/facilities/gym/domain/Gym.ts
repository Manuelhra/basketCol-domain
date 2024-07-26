import { AggregateRoot } from '../../../shared/domain/AggregateRoot';
import { ILocationValueObjectProps } from '../../../shared/domain/value-objects/LocationValueObject';
import { HostUserId } from '../../../users/host/domain/value-objects/HostUserId';
import { IGym } from './IGym';
import { GymCreatedAt } from './value-objects/GymCreatedAt';
import { GymEstablishmentDate } from './value-objects/GymEstablishmentDate';
import { GymId } from './value-objects/GymId';
import { GymLocation } from './value-objects/GymLocation';
import { GymOfficialName } from './value-objects/GymOfficialName';
import { GymUpdatedAt } from './value-objects/GymUpdatedAt';

export class Gym extends AggregateRoot<IGym> {
  readonly #officialName: GymOfficialName;

  readonly #location: GymLocation;

  readonly #establishmentDate: GymEstablishmentDate;

  readonly #registeredById: HostUserId;

  constructor(
    id: string,
    officialName: string,
    location: ILocationValueObjectProps,
    establishmentDate: string,
    registeredById: string,
    createdAt: string,
    updatedAt: string,
  ) {
    const gymId: GymId = new GymId(id);
    const gymCreatedAt: GymCreatedAt = new GymCreatedAt(createdAt);
    const gymUpdatedAt: GymUpdatedAt = new GymUpdatedAt(updatedAt);

    super(gymId, gymCreatedAt, gymUpdatedAt);

    this.#officialName = new GymOfficialName(officialName);
    this.#location = new GymLocation(location);
    this.#establishmentDate = new GymEstablishmentDate(establishmentDate);
    this.#registeredById = new HostUserId(registeredById, 'registeredById');
  }

  public toPrimitives(): IGym {
    return {
      id: this.id.value,
      officialName: this.#officialName.value,
      location: this.#location.value,
      establishmentDate: this.#establishmentDate.value,
      registeredById: this.#registeredById.value,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }
}
