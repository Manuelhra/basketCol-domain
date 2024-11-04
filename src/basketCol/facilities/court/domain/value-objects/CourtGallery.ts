import { IImageValueObjectProps } from '../../../../shared/domain/value-objects/ImageValueObject';
import { FacilityGallery } from '../../../shared/domain/value-objects/FacilityGallery';
import { CourtImage } from './CourtImage';

export class CourtGallery extends FacilityGallery {
  private constructor(value: { images: IImageValueObjectProps[] }) {
    const images = value.images.map(CourtImage.create);
    super({ images });
  }

  public static create(value: { images: IImageValueObjectProps[] }): CourtGallery {
    return new CourtGallery(value);
  }
}
