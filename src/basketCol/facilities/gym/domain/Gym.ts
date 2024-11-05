import { IImageValueObjectProps } from '../../../shared/domain/value-objects/ImageValueObject';
import { ILocationValueObjectProps } from '../../../shared/domain/value-objects/LocationValueObject';
import { Facility } from '../../shared/domain/Facility';
import { IGymPrimitives } from './IGymPrimitives';
import { GymGallery, GymMainImage } from './value-objects';
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
    mainImage: IImageValueObjectProps,
    gallery: { images: IImageValueObjectProps[] },
    createdAt: string,
    updatedAt: string,
  ) {
    super(
      GymId.create(id),
      GymOfficialName.create(officialName),
      GymLocation.create(location),
      GymEstablishmentDate.create(establishmentDate),
      GymRegisteredById.create(registeredById),
      GymMainImage.create(mainImage),
      GymGallery.create(gallery),
      GymCreatedAt.create(createdAt),
      GymUpdatedAt.create(updatedAt),
    );
  }

  public override get toPrimitives(): IGymPrimitives {
    return {
      id: this.id.value,
      officialName: this.officialName.value,
      location: this.location.value,
      establishmentDate: this.establishmentDate.value,
      registeredById: this.registeredById.hostUserIdAsString,
      mainImage: this.mainImage.value,
      gallery: this.gallery.galleryAsPrimitives,
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
    mainImage: IImageValueObjectProps,
    gallery: { images: IImageValueObjectProps[] },
    createdAt: string,
    updatedAt: string,
  ): Gym {
    return new Gym(
      id,
      officialName,
      location,
      establishmentDate,
      registeredById,
      mainImage,
      gallery,
      createdAt,
      updatedAt,
    );
  }

  public static override fromPrimitives(
    id: string,
    officialName: string,
    location: ILocationValueObjectProps,
    establishmentDate: string,
    registeredById: string,
    mainImage: IImageValueObjectProps,
    gallery: { images: IImageValueObjectProps[] },
    createdAt: string,
    updatedAt: string,
  ): Gym {
    return new Gym(
      id,
      officialName,
      location,
      establishmentDate,
      registeredById,
      mainImage,
      gallery,
      createdAt,
      updatedAt,
    );
  }
}
