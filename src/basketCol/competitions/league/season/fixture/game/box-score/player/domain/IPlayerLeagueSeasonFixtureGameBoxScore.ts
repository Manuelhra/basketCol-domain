import { IFixtureGameBoxScore } from '../../../../../../../shared/domain/IFixtureGameBoxScore';

export interface IPlayerLeagueSeasonFixtureGameBoxScore extends IFixtureGameBoxScore {
  playerUserId: string;
}
