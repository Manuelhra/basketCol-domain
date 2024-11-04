import { IImageValueObjectProps } from '../../../../shared/domain/value-objects/ImageValueObject';
import { UserProfileImage } from '../../../shared/domain/value-objects/UserProfileImage';

export class RefereeUserProfileImage extends UserProfileImage {
  private constructor(value: IImageValueObjectProps) {
    super(value);
  }

  public static create(value: IImageValueObjectProps): RefereeUserProfileImage {
    return new RefereeUserProfileImage(value);
  }
}
