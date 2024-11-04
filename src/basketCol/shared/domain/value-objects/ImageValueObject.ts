import { DateValueObject } from './DateValueObject';
import { PositiveIntegerValueObject } from './PositiveIntegerValueObject';
import { StringValueObject } from './StringValueObject';
import { ValueObject } from './ValueObject';

export interface IImageValueObjectProps {
  url: string;
  alt: string;
  uploadedAt: string;
  dimensions: {
    width: number;
    height: number;
  };
}

export abstract class ImageValueObject extends ValueObject<IImageValueObjectProps> {
  protected constructor(value: IImageValueObjectProps, propertyName: string) {
    super(value, propertyName, `
      {
        url: string;
        alt: string;
        uploadedAt: string;
        dimensions: {
          width: number;
          height: number;
        };
      }
  `);

    this.#ensureIsValidUploadedAt(value.uploadedAt);
    this.#ensureIsValidUrl(value.url);
    this.#ensureIsValidAlt(value.alt);
    this.#ensureIsValidDimensions(value.dimensions);
  }

  #ensureIsValidUploadedAt(value: string): void {
    DateValueObject.ensureIsValidDate(value);
  }

  #ensureIsValidUrl(value: string): void {
    StringValueObject.ensureValueTypeIsCorrect(value, 'url');
  }

  #ensureIsValidAlt(value: string): void {
    StringValueObject.ensureValueTypeIsCorrect(value, 'alt');
  }

  #ensureIsValidDimensions(value: { width: number; height: number }): void {
    PositiveIntegerValueObject.ensureIsIntegerAndPositive(value.width, 'dimensions width');
    PositiveIntegerValueObject.ensureIsIntegerAndPositive(value.height, 'dimensions height');
  }
}
