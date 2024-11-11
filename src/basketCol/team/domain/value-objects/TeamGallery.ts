import { IImageValueObjectProps } from '../../../shared/domain/value-objects/ImageValueObject';
import { ValueObject } from '../../../shared/domain/value-objects/ValueObject';
import { TeamImage } from './TeamImage';

export class TeamGallery extends ValueObject<{ images: TeamImage[] }> {
  protected constructor(value: { images: IImageValueObjectProps[] }) {
    const images = value.images.map(TeamImage.create);
    super({ images }, 'gallery', '{ images: TeamImage[] }');
  }

  public static create(value: { images: IImageValueObjectProps[] }): TeamGallery {
    return new TeamGallery(value);
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
