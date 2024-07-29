import { AggregateRoot } from '../../../shared/domain/AggregateRoot';
import { IGame } from './IGame';
import { GameAssistantRefereeId } from './value-object/GameAssistantRefereeId';
import { GameAwayScore } from './value-object/GameAwayScore';
import { GameAwayTeamId } from './value-object/GameAwayTeamId';
import { GameCreatedAt } from './value-object/GameCreatedAt';
import { GameDate } from './value-object/GameDate';
import { GameDuration } from './value-object/GameDuration';
import { GameHeadRefereeId } from './value-object/GameHeadRefereeId';
import { GameHomeScore } from './value-object/GameHomeScore';
import { GameHomeTeamId } from './value-object/GameHomeTeamId';
import { GameId } from './value-object/GameId';
import { GameReferencedCourtId } from './value-object/GameReferencedCourtId';
import { GameType } from './value-object/GameType';
import { GameUpdatedAt } from './value-object/GameUpdatedAt';

export abstract class Game<I extends IGame> extends AggregateRoot<I> {
  protected readonly date: GameDate;

  protected readonly homeTeamId: GameHomeTeamId;

  protected readonly awayTeamId: GameAwayTeamId;

  protected readonly homeScore: GameHomeScore;

  protected readonly awayScore: GameAwayScore;

  protected readonly gameType: GameType;

  protected readonly gameDuration: GameDuration;

  protected readonly headRefereeId: GameHeadRefereeId;

  protected readonly assistantRefereeId: GameAssistantRefereeId;

  protected readonly courtId: GameReferencedCourtId;

  constructor(
    id: GameId,
    date: GameDate,
    homeTeamId: GameHomeTeamId,
    awayTeamId: GameAwayTeamId,
    homeScore: GameHomeScore,
    awayScore: GameAwayScore,
    gameType: GameType,
    gameDuration: GameDuration,
    headRefereeId: GameHeadRefereeId,
    assistantRefereeId: GameAssistantRefereeId,
    courtId: GameReferencedCourtId,
    createdAt: GameCreatedAt,
    updatedAt: GameUpdatedAt,
  ) {
    super(id, createdAt, updatedAt);

    this.date = date;
    this.homeTeamId = homeTeamId;
    this.awayTeamId = awayTeamId;
    this.homeScore = homeScore;
    this.awayScore = awayScore;
    this.gameType = gameType;
    this.gameDuration = gameDuration;
    this.headRefereeId = headRefereeId;
    this.assistantRefereeId = assistantRefereeId;
    this.courtId = courtId;
  }
}
