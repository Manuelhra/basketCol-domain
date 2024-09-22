import { UserBiography } from '../../../shared/domain/value-objects/UserBiography';

export class HostUserBiography extends UserBiography {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): HostUserBiography {
    return new HostUserBiography(value);
  }
}
