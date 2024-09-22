import { ReferencedPlayerUserId } from '../../../../../../../../../shared/domain/value-objects/ReferencedPlayerUserId';

export class PLSFGBoxScorePlayerUserId extends ReferencedPlayerUserId {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): PLSFGBoxScorePlayerUserId {
    return new PLSFGBoxScorePlayerUserId(value);
  }
}
