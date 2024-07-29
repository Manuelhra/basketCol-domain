import { GameCreatedAt } from '../../../../../shared/domain/value-object/GameCreatedAt';

export class LSGameCreatedAt extends GameCreatedAt {
  public constructor(value: string) {
    super(value);
  }
}
