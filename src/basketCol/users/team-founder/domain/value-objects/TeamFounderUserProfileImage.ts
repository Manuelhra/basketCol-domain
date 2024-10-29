import { IUserProfileImageProps, UserProfileImage } from '../../../shared/domain/value-objects/UserProfileImage';

export class TeamFounderUserProfileImage extends UserProfileImage {
  private constructor(value: IUserProfileImageProps) {
    super(value);
  }

  public static create(value: IUserProfileImageProps): TeamFounderUserProfileImage {
    return new TeamFounderUserProfileImage(value);
  }
}
