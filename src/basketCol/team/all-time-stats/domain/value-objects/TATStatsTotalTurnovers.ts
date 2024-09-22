import { StatsTotalTurnovers } from '../../../../shared/domain/value-objects/StatsTotalTurnovers';

export class TATStatsTotalTurnovers extends StatsTotalTurnovers {
  public constructor(value: number) {
    super(value);
  }

  public static create(value: number): TATStatsTotalTurnovers {
    return new TATStatsTotalTurnovers(value);
  }
}
