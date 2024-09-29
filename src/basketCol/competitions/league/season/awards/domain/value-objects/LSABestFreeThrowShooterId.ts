import { ReferencedPlayerUserId } from '../../../../../../shared/domain/value-objects/ReferencedPlayerUserId';

export class LSABestFreeThrowShooterId extends ReferencedPlayerUserId {
  private constructor(value: string) {
    super(value, 'bestFreeThrowShooterId');
  }

  public static create(value: string): LSABestFreeThrowShooterId {
    return new LSABestFreeThrowShooterId(value);
  }
}
