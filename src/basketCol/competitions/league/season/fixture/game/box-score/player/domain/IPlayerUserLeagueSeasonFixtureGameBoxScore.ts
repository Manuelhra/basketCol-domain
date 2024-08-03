import { IFixtureGameBoxScore } from '../../../../../../../shared/domain/IFixtureGameBoxScore';

export interface IPlayerUserLeagueSeasonFixtureGameBoxScore extends IFixtureGameBoxScore {
  playerUserId: string;
}
