import { StatsTotalAssists } from '../../../../shared/domain/value-objects/StatsTotalAssists';

export class TATStatsTotalAssists extends StatsTotalAssists {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): TATStatsTotalAssists {
    return new TATStatsTotalAssists(value);
  }
}
