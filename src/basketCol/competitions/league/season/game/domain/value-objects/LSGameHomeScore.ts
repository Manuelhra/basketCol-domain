import { GameHomeScore } from '../../../../../shared/domain/value-object/GameHomeScore';

export class LSGameHomeScore extends GameHomeScore {
  public constructor(value: number) {
    super(value);
  }
}
