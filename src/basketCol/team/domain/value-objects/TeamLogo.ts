import { IImageValueObjectProps, ImageValueObject } from '../../../shared/domain/value-objects/ImageValueObject';

export class TeamLogo extends ImageValueObject {
  private constructor(value: IImageValueObjectProps) {
    super(value, 'logo');
  }

  static create(value: IImageValueObjectProps): TeamLogo {
    return new TeamLogo(value);
  }
}
