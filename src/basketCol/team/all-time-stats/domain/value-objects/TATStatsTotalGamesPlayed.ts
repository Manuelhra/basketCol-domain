import { StatsTotalGamesPlayed } from '../../../../shared/domain/value-objects/StatsTotalGamesPlayed';

export class TATStatsTotalGamesPlayed extends StatsTotalGamesPlayed {
  public constructor(value: number) {
    super(value);
  }
}
