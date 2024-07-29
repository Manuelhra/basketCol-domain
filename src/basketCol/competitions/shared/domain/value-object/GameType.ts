import { StringValueObject } from '../../../../shared/domain/value-objects/StringValueObject';
import { InvalidGameTypeError } from '../exceptions/InvalidGameTypeError';

export class GameType extends StringValueObject {
  static readonly #VALID_TYPES: readonly string[] = ['REGULAR', 'PLAYOFFS', 'FINALS', 'ALL_STAR', 'PRE_SEASON', 'FRIENDLY'] as const;

  constructor(value: string) {
    super(value, 'gameType');

    GameType.ensureIsValidType(value);
  }

  public static createRegular(): GameType {
    return new GameType('REGULAR');
  }

  public static createPlayoffs(): GameType {
    return new GameType('PLAYOFFS');
  }

  public static createFinals(): GameType {
    return new GameType('FINALS');
  }

  public static createAllStar(): GameType {
    return new GameType('ALL_STAR');
  }

  public static createPreSeason(): GameType {
    return new GameType('PRE_SEASON');
  }

  private static ensureIsValidType(type: string): void {
    if (!GameType.#VALID_TYPES.includes(type)) {
      throw new InvalidGameTypeError(type, GameType.#VALID_TYPES);
    }
  }

  public isRegularSeason(): boolean {
    return this.value === 'REGULAR';
  }

  public isPlayoffs(): boolean {
    return this.value === 'PLAYOFFS';
  }

  public isFinals(): boolean {
    return this.value === 'FINALS';
  }

  public isAllStar(): boolean {
    return this.value === 'ALL_STAR';
  }

  public isPreSeason(): boolean {
    return this.value === 'PRE_SEASON';
  }
}
