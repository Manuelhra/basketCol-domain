import { IImageValueObjectProps, ImageValueObject } from '../../../shared/domain/value-objects/ImageValueObject';

export class TeamImage extends ImageValueObject {
  private constructor(value: IImageValueObjectProps) {
    super(value, 'teamImage');
  }

  public static create(value: IImageValueObjectProps): TeamImage {
    return new TeamImage(value);
  }
}
