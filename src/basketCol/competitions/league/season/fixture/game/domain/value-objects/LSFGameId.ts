import { GameId } from '../../../../../../shared/domain/value-object/GameId';

export class LSFGameId extends GameId {
  public constructor(value: string) {
    super(value);
  }
}
