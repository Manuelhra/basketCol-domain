import { ReferencedLeagueFounderUserId } from '../../../../shared/domain/value-objects/ReferencedLeagueFounderUserId';

export class LReferencedLeagueFounderUserId extends ReferencedLeagueFounderUserId {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): LReferencedLeagueFounderUserId {
    return new LReferencedLeagueFounderUserId(value);
  }
}
