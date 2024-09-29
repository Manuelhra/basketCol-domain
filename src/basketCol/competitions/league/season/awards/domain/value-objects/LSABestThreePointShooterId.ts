import { ReferencedPlayerUserId } from '../../../../../../shared/domain/value-objects/ReferencedPlayerUserId';

export class LSABestThreePointShooterId extends ReferencedPlayerUserId {
  private constructor(value: string) {
    super(value, 'bestThreePointShooterId');
  }

  public static create(value: string): LSABestThreePointShooterId {
    return new LSABestThreePointShooterId(value);
  }
}
