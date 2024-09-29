import { StringValueObject } from '../../../../shared/domain/value-objects/StringValueObject';
import { InvalidGameTypeError } from '../exceptions/InvalidGameTypeError';

export class FGameType extends StringValueObject {
  static readonly #VALID_TYPES: readonly string[] = ['REGULAR', 'PLAYOFFS', 'FINALS', 'ALL_STAR', 'PRE_SEASON', 'FRIENDLY'] as const;

  protected constructor(value: string) {
    super(value, 'gameType');

    FGameType.#ensureIsValidType(value);
  }

  public static create(value: string): FGameType {
    return new FGameType(value);
  }

  public static createRegular(): FGameType {
    return new FGameType('REGULAR');
  }

  public static createPlayoffs(): FGameType {
    return new FGameType('PLAYOFFS');
  }

  public static createFinals(): FGameType {
    return new FGameType('FINALS');
  }

  public static createAllStar(): FGameType {
    return new FGameType('ALL_STAR');
  }

  public static createPreSeason(): FGameType {
    return new FGameType('PRE_SEASON');
  }

  static #ensureIsValidType(type: string): void {
    if (!FGameType.#VALID_TYPES.includes(type)) {
      throw InvalidGameTypeError.create(type, FGameType.#VALID_TYPES);
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
