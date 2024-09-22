import { LeagueSeasonId } from '../../../competitions/league/season/domain/value-objects/LeagueSeasonId';
import { InvalidLeagueSeasonIdInstanceError } from '../exceptions/InvalidLeagueSeasonIdInstanceError';
import { ValueObject } from './ValueObject';

export abstract class ReferencedLeagueSeasonId extends ValueObject<LeagueSeasonId> {
  protected constructor(value: string) {
    const leagueSeasonId: LeagueSeasonId = LeagueSeasonId.create(value);

    super(leagueSeasonId, 'leagueSeasonId', 'string');

    this.ensureIsLeagueSeasonId(leagueSeasonId);
  }

  public get leagueSeasonIdAsString(): string {
    return this.value.value;
  }

  private ensureIsLeagueSeasonId(value: LeagueSeasonId): void {
    if (!(value instanceof LeagueSeasonId)) {
      throw new InvalidLeagueSeasonIdInstanceError();
    }
  }
}
