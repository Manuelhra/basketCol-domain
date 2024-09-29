import { ReferencedPlayerUserId } from '../../../../../shared/domain/value-objects/ReferencedPlayerUserId';

export class PUCStatsPlayerUserId extends ReferencedPlayerUserId {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): PUCStatsPlayerUserId {
    return new PUCStatsPlayerUserId(value);
  }
}
