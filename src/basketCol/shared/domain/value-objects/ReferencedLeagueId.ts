import { LeagueId } from '../../../competitions/league/domain/value-objects/LeagueId';
import { InvalidLeagueIdInstanceError } from '../exceptions/InvalidLeagueIdInstanceError';
import { ValueObject } from './ValueObject';

export abstract class ReferencedLeagueId extends ValueObject<LeagueId> {
  protected constructor(value: string) {
    const leagueId: LeagueId = new LeagueId(value);

    super(leagueId, 'leagueId', 'string');

    this.ensureIsLeagueId(leagueId);
  }

  public get leagueIdAsString(): string {
    return this.value.value;
  }

  private ensureIsLeagueId(value: LeagueId): void {
    if (!(value instanceof LeagueId)) {
      throw new InvalidLeagueIdInstanceError();
    }
  }
}
