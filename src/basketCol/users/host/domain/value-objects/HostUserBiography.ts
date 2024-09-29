import { UserBiography } from '../../../shared/domain/value-objects/UserBiography';

export class HostUserBiography extends UserBiography {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): HostUserBiography {
    return new HostUserBiography(value);
  }
}
