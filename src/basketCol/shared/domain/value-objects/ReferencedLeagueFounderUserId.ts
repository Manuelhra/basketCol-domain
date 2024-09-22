import { LeagueFounderUserId } from '../../../users/league-founder/domain/value-objects/LeagueFounderUserId';
import { InvalidLeagueFounderUserIdInstanceError } from '../exceptions/InvalidLeagueFounderUserIdInstanceError';
import { ValueObject } from './ValueObject';

export abstract class ReferencedLeagueFounderUserId extends ValueObject<LeagueFounderUserId> {
  protected constructor(value: string) {
    const leagueFounderUserId: LeagueFounderUserId = LeagueFounderUserId.create(value, 'leagueFounderUserId');

    super(leagueFounderUserId, 'leagueFounderUserId', 'string');

    this.ensureIsLeagueFounderUserId(leagueFounderUserId);
  }

  public get leagueFounderUserIdAsString(): string {
    return this.value.value;
  }

  private ensureIsLeagueFounderUserId(value: LeagueFounderUserId): void {
    if (!(value instanceof LeagueFounderUserId)) {
      throw new InvalidLeagueFounderUserIdInstanceError();
    }
  }
}
