import { IImageValueObjectProps } from '../../../../shared/domain/value-objects/ImageValueObject';
import { FacilityMainImage } from '../../../shared/domain/value-objects/FacilityMainImage';

export class GymMainImage extends FacilityMainImage {
  private constructor(value: IImageValueObjectProps) {
    super(value);
  }

  public static create(value: IImageValueObjectProps): GymMainImage {
    return new GymMainImage(value);
  }
}
