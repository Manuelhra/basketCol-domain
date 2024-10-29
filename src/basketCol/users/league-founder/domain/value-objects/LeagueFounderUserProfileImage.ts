import { IUserProfileImageProps, UserProfileImage } from '../../../shared/domain/value-objects/UserProfileImage';

export class LeagueFounderUserProfileImage extends UserProfileImage {
  private constructor(value: IUserProfileImageProps) {
    super(value);
  }

  public static create(value: IUserProfileImageProps): LeagueFounderUserProfileImage {
    return new LeagueFounderUserProfileImage(value);
  }
}
