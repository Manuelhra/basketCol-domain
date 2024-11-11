import { IImageValueObjectProps, ImageValueObject } from '../../../shared/domain/value-objects/ImageValueObject';

export class TeamMainImage extends ImageValueObject {
  private constructor(value: IImageValueObjectProps) {
    super(value, 'mainImage');
  }

  static create(value: IImageValueObjectProps): TeamMainImage {
    return new TeamMainImage(value);
  }
}
