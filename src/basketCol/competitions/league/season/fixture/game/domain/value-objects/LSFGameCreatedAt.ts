import { GameCreatedAt } from '../../../../../../shared/domain/value-object/GameCreatedAt';

export class LSFGameCreatedAt extends GameCreatedAt {
  public constructor(value: string) {
    super(value);
  }
}
