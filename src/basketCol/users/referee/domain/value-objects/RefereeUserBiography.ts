import { UserBiography } from '../../../shared/domain/value-objects/UserBiography';

export class RefereeUserBiography extends UserBiography {
  public constructor(value: string) {
    super(value);
  }
}
