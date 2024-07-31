import { GameHomeScore } from '../../../../../../shared/domain/value-object/GameHomeScore';

export class LSFGameHomeScore extends GameHomeScore {
  public constructor(value: number) {
    super(value);
  }
}
