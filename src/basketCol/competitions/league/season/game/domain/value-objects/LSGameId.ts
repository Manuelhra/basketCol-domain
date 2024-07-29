import { GameId } from '../../../../../shared/domain/value-object/GameId';

export class LSGameId extends GameId {
  public constructor(value: string) {
    super(value);
  }
}
