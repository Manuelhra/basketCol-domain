import { IImageValueObjectProps } from '../../../../shared/domain/value-objects/ImageValueObject';
import { FacilityImage } from '../../../shared/domain/value-objects/FacilityImage';

export class GymImage extends FacilityImage {
  private constructor(value: IImageValueObjectProps) {
    super(value, 'gymImage');
  }

  public static create(value: IImageValueObjectProps): GymImage {
    return new GymImage(value);
  }
}
