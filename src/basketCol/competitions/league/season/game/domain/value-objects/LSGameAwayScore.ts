import { GameAwayScore } from '../../../../../shared/domain/value-object/GameAwayScore';

export class LSGameAwayScore extends GameAwayScore {
  public constructor(value: number) {
    super(value);
  }
}
