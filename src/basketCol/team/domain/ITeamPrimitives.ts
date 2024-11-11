import { IAggregateRootPrimitives } from '../../shared/domain/IAggregateRootPrimitives';
import { IImageValueObjectProps } from '../../shared/domain/value-objects/ImageValueObject';

interface ITeamMainMedia {
  mainImage: IImageValueObjectProps
}

interface ITeamGallery {
  gallery: {
    images: Array<IImageValueObjectProps>;
  };
}

export interface ITeamPrimitives extends
  IAggregateRootPrimitives,
  ITeamMainMedia,
  ITeamGallery {
  officialName: string;
  gender: string;
  teamFounderUserId: string;
}
