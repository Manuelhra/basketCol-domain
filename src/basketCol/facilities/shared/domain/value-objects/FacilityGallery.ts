import { IImageValueObjectProps } from '../../../../shared/domain/value-objects/ImageValueObject';
import { ValueObject } from '../../../../shared/domain/value-objects/ValueObject';
import { FacilityImage } from './FacilityImage';

export abstract class FacilityGallery extends ValueObject<{ images: FacilityImage[] }> {
  protected constructor(value: { images: FacilityImage[] }) {
    super(value, 'gallery', '{ images: FacilityImage[] }');
  }

  public get galleryAsPrimitives(): { images: IImageValueObjectProps[] } {
    return {
      images: this.value.images.map((image) => ({
        url: image.value.url,
        uploadedAt: image.value.uploadedAt,
        alt: image.value.alt,
        dimensions: image.value.dimensions,
      })),
    };
  }
}
