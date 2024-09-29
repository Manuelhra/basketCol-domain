import { ReferencedLeagueId } from '../../../../../shared/domain/value-objects/ReferencedLeagueId';

export class LSReferencedLeagueId extends ReferencedLeagueId {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): LSReferencedLeagueId {
    return new LSReferencedLeagueId(value);
  }
}
