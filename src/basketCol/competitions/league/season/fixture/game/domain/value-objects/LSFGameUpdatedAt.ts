import { GameUpdatedAt } from '../../../../../../shared/domain/value-object/GameUpdatedAt';

export class LSFGameUpdatedAt extends GameUpdatedAt {
  public constructor(value: string) {
    super(value);
  }
}
