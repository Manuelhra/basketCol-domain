import { ReferencedPlayerUserId } from '../../../../../../shared/domain/value-objects/ReferencedPlayerUserId';

export class LSABestOffensiveRebounderId extends ReferencedPlayerUserId {
  public constructor(value: string) {
    super(value, 'bestOffensiveRebounderId');
  }

  public static create(value: string): LSABestOffensiveRebounderId {
    return new LSABestOffensiveRebounderId(value);
  }
}
