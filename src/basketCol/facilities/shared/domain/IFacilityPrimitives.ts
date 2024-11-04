import { IAggregateRootPrimitives } from '../../../shared/domain/IAggregateRootPrimitives';
import { IImageValueObjectProps } from '../../../shared/domain/value-objects/ImageValueObject';
import { ILocationValueObjectProps } from '../../../shared/domain/value-objects/LocationValueObject';

interface IFacilityIdentity {
  officialName: string;
  establishmentDate: string;
  registeredById: string;
}

interface IFacilityLocation {
  location: ILocationValueObjectProps;
}

interface IFacilityMainMedia {
  mainImage: IImageValueObjectProps
}

interface IFacilityGallery {
  gallery: {
    images: Array<IImageValueObjectProps>;
  };
}

export interface IFacilityPrimitives extends
  IAggregateRootPrimitives,
  IFacilityIdentity,
  IFacilityLocation,
  IFacilityMainMedia,
  IFacilityGallery {}
