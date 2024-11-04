import { IImageValueObjectProps } from '../../../../shared/domain/value-objects/ImageValueObject';
import { FacilityGallery } from '../../../shared/domain/value-objects/FacilityGallery';
import { GymImage } from './GymImage';

export class GymGallery extends FacilityGallery {
  private constructor(value: { images: IImageValueObjectProps[] }) {
    const images = value.images.map(GymImage.create);
    super({ images });
  }

  public static create(value: { images: IImageValueObjectProps[] }): GymGallery {
    return new GymGallery(value);
  }
}
