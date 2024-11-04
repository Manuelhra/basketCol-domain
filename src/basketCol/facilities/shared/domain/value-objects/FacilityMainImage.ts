import { IImageValueObjectProps, ImageValueObject } from '../../../../shared/domain/value-objects/ImageValueObject';

export abstract class FacilityMainImage extends ImageValueObject {
  protected constructor(value: IImageValueObjectProps) {
    super(value, 'mainImage');
  }
}
