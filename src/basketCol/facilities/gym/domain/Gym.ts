import { ILocationValueObjectProps } from '../../../shared/domain/value-objects/LocationValueObject';
import { Facility } from '../../shared/domain/Facility';
import { IGymPrimitives } from './IGymPrimitives';
import { GymCreatedAt } from './value-objects/GymCreatedAt';
import { GymEstablishmentDate } from './value-objects/GymEstablishmentDate';
import { GymId } from './value-objects/GymId';
import { GymLocation } from './value-objects/GymLocation';
import { GymOfficialName } from './value-objects/GymOfficialName';
import { GymRegisteredById } from './value-objects/GymRegisteredById';
import { GymUpdatedAt } from './value-objects/GymUpdatedAt';

export class Gym extends Facility<IGymPrimitives> {
  private constructor(
    id: string,
    officialName: string,
    location: ILocationValueObjectProps,
    establishmentDate: string,
    registeredById: string,
    createdAt: string,
    updatedAt: string,
  ) {
    super(
      GymId.create(id),
      GymOfficialName.create(officialName),
      GymLocation.create(location),
      GymEstablishmentDate.create(establishmentDate),
      GymRegisteredById.create(registeredById),
      GymCreatedAt.create(createdAt),
      GymUpdatedAt.create(updatedAt),
    );
  }

  public override toPrimitives(): IGymPrimitives {
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

  public static override create(
    id: string,
    officialName: string,
    location: ILocationValueObjectProps,
    establishmentDate: string,
    registeredById: string,
    createdAt: string,
    updatedAt: string,
  ): Gym {
    return new Gym(
      id,
      officialName,
      location,
      establishmentDate,
      registeredById,
      createdAt,
      updatedAt,
    );
  }
}
