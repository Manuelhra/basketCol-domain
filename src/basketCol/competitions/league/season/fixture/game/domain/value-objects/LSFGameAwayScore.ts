import { GameAwayScore } from '../../../../../../shared/domain/value-object/GameAwayScore';

export class LSFGameAwayScore extends GameAwayScore {
  public constructor(value: number) {
    super(value);
  }
}
