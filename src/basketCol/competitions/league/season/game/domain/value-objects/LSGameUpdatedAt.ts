import { GameUpdatedAt } from '../../../../../shared/domain/value-object/GameUpdatedAt';

export class LSGameUpdatedAt extends GameUpdatedAt {
  public constructor(value: string) {
    super(value);
  }
}
