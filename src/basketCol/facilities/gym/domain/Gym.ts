import { ILocationValueObjectProps } from '../../../shared/domain/value-objects/LocationValueObject';
import { Facility } from '../../shared/domain/Facility';
import { IGym } from './IGym';
import { GymCreatedAt } from './value-objects/GymCreatedAt';
import { GymEstablishmentDate } from './value-objects/GymEstablishmentDate';
import { GymId } from './value-objects/GymId';
import { GymLocation } from './value-objects/GymLocation';
import { GymOfficialName } from './value-objects/GymOfficialName';
import { GymRegisteredById } from './value-objects/GymRegisteredById';
import { GymUpdatedAt } from './value-objects/GymUpdatedAt';

export class Gym extends Facility<IGym> {
  constructor(
    id: string,
    officialName: string,
    location: ILocationValueObjectProps,
    establishmentDate: string,
    registeredById: string,
    createdAt: string,
    updatedAt: string,
  ) {
    super(
      new GymId(id),
      new GymOfficialName(officialName),
      new GymLocation(location),
      new GymEstablishmentDate(establishmentDate),
      new GymRegisteredById(registeredById),
      new GymCreatedAt(createdAt),
      new GymUpdatedAt(updatedAt),
    );
  }

  public toPrimitives(): IGym {
    return {
      id: this.id.value,
      officialName: this.officialName.value,
      location: this.location.value,
      establishmentDate: this.establishmentDate.value,
      registeredById: this.registeredById.hostUserIdAsString,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }
}
