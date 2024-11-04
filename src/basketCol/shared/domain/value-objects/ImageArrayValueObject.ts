import { IImageValueObjectProps, ImageValueObject } from './ImageValueObject';
import { ValueObject } from './ValueObject';

export abstract class ImageArrayValueObject extends ValueObject<ImageValueObject[]> {
  public get imageArrayAsToPrimitives(): IImageValueObjectProps[] {
    return this.value.map((image) => ({
      url: image.value.url,
      uploadedAt: image.value.uploadedAt,
      alt: image.value.alt,
      dimensions: image.value.dimensions,
    }));
  }
}
