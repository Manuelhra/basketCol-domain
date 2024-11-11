import { IImageValueObjectProps } from '../../../shared/domain/value-objects/ImageValueObject';
import { ILocationValueObjectProps } from '../../../shared/domain/value-objects/LocationValueObject';
import { Facility } from '../../shared/domain/Facility';
import { ICourtPrimitives } from './ICourtPrimitives';
import { CourtGallery, CourtMainImage } from './value-objects';
import { CourtCreatedAt } from './value-objects/CourtCreatedAt';
import { CourtEstablishmentDate } from './value-objects/CourtEstablishmentDate';
import { CourtHoopHeight } from './value-objects/CourtHoopHeight';
import { CourtId } from './value-objects/CourtId';
import { CourtLocation } from './value-objects/CourtLocation';
import { CourtFacilityId } from './value-objects/CourtFacilityId';
import { CourtOfficialName } from './value-objects/CourtOfficialName';
import { CourtRegisteredById } from './value-objects/CourtRegisteredById';
import { CourtSurface } from './value-objects/CourtSurface';
import { CourtUpdatedAt } from './value-objects/CourtUpdatedAt';

export class Court extends Facility<ICourtPrimitives> {
  readonly #surface: CourtSurface;

  readonly #hoopHeight: CourtHoopHeight;

  readonly #facilityId: CourtFacilityId;

  private constructor(
    id: string,
    officialName: string,
    establishmentDate: string,
    surface: string,
    hoopHeight: number,
    registeredById: string,
    location: ILocationValueObjectProps,
    mainImage: IImageValueObjectProps,
    gallery: { images: IImageValueObjectProps[] },
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
      CourtMainImage.create(mainImage),
      CourtGallery.create(gallery),
      CourtCreatedAt.create(createdAt),
      CourtUpdatedAt.create(updatedAt),
    );

    this.#surface = CourtSurface.create(surface);
    this.#hoopHeight = CourtHoopHeight.create(hoopHeight);
    this.#facilityId = CourtFacilityId.create(facilityId);
  }

  public override get toPrimitives(): ICourtPrimitives {
    return {
      id: this.id.value,
      officialName: this.officialName.value,
      establishmentDate: this.establishmentDate.value,
      surface: this.#surface.value,
      hoopHeight: this.#hoopHeight.value,
      registeredById: this.registeredById.value,
      mainImage: this.mainImage.value,
      gallery: this.gallery.galleryAsPrimitives,
      location: this.location.value,
      facilityId: this.#facilityId.value,
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
    mainImage: IImageValueObjectProps,
    gallery: { images: IImageValueObjectProps[] },
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
      mainImage,
      gallery,
      facilityId,
      createdAt,
      updatedAt,
    );
  }

  public static override fromPrimitives(
    id: string,
    officialName: string,
    establishmentDate: string,
    surface: string,
    hoopHeight: number,
    registeredById: string,
    location: ILocationValueObjectProps,
    mainImage: IImageValueObjectProps,
    gallery: { images: IImageValueObjectProps[] },
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
      mainImage,
      gallery,
      facilityId,
      createdAt,
      updatedAt,
    );
  }
}
