import { UserBiography } from '../../../shared/domain/value-objects/UserBiography';

export class TFUBiography extends UserBiography {
  public constructor(value: string) {
    super(value);
  }
}
