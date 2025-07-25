import { StatsTotalSeasonsLeaguePlayed } from '../../../../../shared/domain/value-objects/StatsTotalSeasonsLeaguePlayed';

export class PUCStatsTotalSeasonsLeaguePlayed extends StatsTotalSeasonsLeaguePlayed {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): PUCStatsTotalSeasonsLeaguePlayed {
    return new PUCStatsTotalSeasonsLeaguePlayed(value);
  }
}
