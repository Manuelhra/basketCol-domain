import { UserBiography } from '../../../shared/domain/value-objects/UserBiography';

export class HostUserBiography extends UserBiography {
  public constructor(value: string) {
    super(value);
  }
}
