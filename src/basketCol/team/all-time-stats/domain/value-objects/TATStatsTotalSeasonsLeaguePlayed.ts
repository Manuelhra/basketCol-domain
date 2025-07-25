import { StatsTotalSeasonsLeaguePlayed } from '../../../../shared/domain/value-objects/StatsTotalSeasonsLeaguePlayed';

export class TATStatsTotalSeasonsLeaguePlayed extends StatsTotalSeasonsLeaguePlayed {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): TATStatsTotalSeasonsLeaguePlayed {
    return new TATStatsTotalSeasonsLeaguePlayed(value);
  }
}
