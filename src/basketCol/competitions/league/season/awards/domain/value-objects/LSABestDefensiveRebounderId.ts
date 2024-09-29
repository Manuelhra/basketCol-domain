import { ReferencedPlayerUserId } from '../../../../../../shared/domain/value-objects/ReferencedPlayerUserId';

export class LSABestDefensiveRebounderId extends ReferencedPlayerUserId {
  private constructor(value: string) {
    super(value, 'bestDefensiveRebounderId');
  }

  public static create(value: string): LSABestDefensiveRebounderId {
    return new LSABestDefensiveRebounderId(value);
  }
}
