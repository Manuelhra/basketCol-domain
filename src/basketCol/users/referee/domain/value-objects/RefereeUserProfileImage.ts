import { IUserProfileImageProps, UserProfileImage } from '../../../shared/domain/value-objects/UserProfileImage';

export class RefereeUserProfileImage extends UserProfileImage {
  private constructor(value: IUserProfileImageProps) {
    super(value);
  }

  public static create(value: IUserProfileImageProps): RefereeUserProfileImage {
    return new RefereeUserProfileImage(value);
  }
}
