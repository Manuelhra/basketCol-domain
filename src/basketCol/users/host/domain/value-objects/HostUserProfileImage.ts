import { IImageValueObjectProps } from '../../../../shared/domain/value-objects/ImageValueObject';
import { UserProfileImage } from '../../../shared/domain/value-objects/UserProfileImage';

export class HostUserProfileImage extends UserProfileImage {
  private constructor(value: IImageValueObjectProps) {
    super(value);
  }

  public static create(value: IImageValueObjectProps): HostUserProfileImage {
    return new HostUserProfileImage(value);
  }
}
