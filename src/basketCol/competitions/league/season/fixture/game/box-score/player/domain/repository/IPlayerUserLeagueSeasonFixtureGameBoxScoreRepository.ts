import { Nullable } from '../../../../../../../../../shared/domain/Nullable';
import { PlayerUserLeagueSeasonFixtureGameBoxScore } from '../PlayerUserLeagueSeasonFixtureGameBoxScore';
import { PLSFGBoxScoreFixtureGameId } from '../value-objects/PLSFGBoxScoreFixtureGameId';

export interface IPlayerUserLeagueSeasonFixtureGameBoxScoreRepository {
  save(playerUserLeagueSeasonFixtureGameBoxScore: PlayerUserLeagueSeasonFixtureGameBoxScore): Promise<void>;
  find(): Promise<Nullable<PlayerUserLeagueSeasonFixtureGameBoxScore>>;
  findById(pLSFGBoxScoreFixtureGameId: PLSFGBoxScoreFixtureGameId): Promise<Nullable<PlayerUserLeagueSeasonFixtureGameBoxScore>>;
}
