import { ReferencedLeagueSeasonId } from '../../../../../../shared/domain/value-objects/ReferencedLeagueSeasonId';

export class LSGameLeagueSeasonId extends ReferencedLeagueSeasonId {
  public constructor(value: string) {
    super(value);
  }
}
