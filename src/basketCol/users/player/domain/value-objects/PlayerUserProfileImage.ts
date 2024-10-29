import { IUserProfileImageProps, UserProfileImage } from '../../../shared/domain/value-objects/UserProfileImage';

export class PlayerUserProfileImage extends UserProfileImage {
  private constructor(value: IUserProfileImageProps) {
    super(value);
  }

  public static create(value: IUserProfileImageProps): PlayerUserProfileImage {
    return new PlayerUserProfileImage(value);
  }
}
