import { IUserProfileImageProps, UserProfileImage } from '../../../shared/domain/value-objects/UserProfileImage';

export class HostUserProfileImage extends UserProfileImage {
  private constructor(value: IUserProfileImageProps) {
    super(value);
  }

  public static create(value: IUserProfileImageProps): HostUserProfileImage {
    return new HostUserProfileImage(value);
  }
}
