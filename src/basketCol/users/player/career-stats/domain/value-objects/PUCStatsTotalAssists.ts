import { StatsTotalAssists } from '../../../../../shared/domain/value-objects/StatsTotalAssists';

export class PUCStatsTotalAssists extends StatsTotalAssists {
  public constructor(value: number) {
    super(value);
  }

  public static create(value: number): PUCStatsTotalAssists {
    return new PUCStatsTotalAssists(value);
  }
}
