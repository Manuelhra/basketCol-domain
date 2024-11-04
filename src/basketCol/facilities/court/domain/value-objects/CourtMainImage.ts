import { IImageValueObjectProps } from '../../../../shared/domain/value-objects/ImageValueObject';
import { FacilityMainImage } from '../../../shared/domain/value-objects/FacilityMainImage';

export class CourtMainImage extends FacilityMainImage {
  private constructor(value: IImageValueObjectProps) {
    super(value);
  }

  public static create(value: IImageValueObjectProps): CourtMainImage {
    return new CourtMainImage(value);
  }
}
