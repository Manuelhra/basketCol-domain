import { IImageValueObjectProps } from '../../../../shared/domain/value-objects/ImageValueObject';
import { FacilityImage } from '../../../shared/domain/value-objects/FacilityImage';

export class CourtImage extends FacilityImage {
  private constructor(value: IImageValueObjectProps) {
    super(value, 'courtImage');
  }

  public static create(value: IImageValueObjectProps): CourtImage {
    return new CourtImage(value);
  }
}
