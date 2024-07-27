import { ReferencedPlayerUserId } from '../../../../../../shared/domain/value-objects/ReferencedPlayerUserId';

export class LSABestFreeThrowShooterId extends ReferencedPlayerUserId {
  public constructor(value: string) {
    super(value, 'bestFreeThrowShooterId');
  }
}
