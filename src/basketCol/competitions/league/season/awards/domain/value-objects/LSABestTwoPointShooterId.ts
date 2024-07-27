import { ReferencedPlayerUserId } from '../../../../../../shared/domain/value-objects/ReferencedPlayerUserId';

export class LSABestTwoPointShooterId extends ReferencedPlayerUserId {
  public constructor(value: string) {
    super(value, 'bestTwoPointShooterId');
  }
}
