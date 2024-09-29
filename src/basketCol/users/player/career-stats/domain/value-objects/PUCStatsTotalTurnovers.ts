import { StatsTotalTurnovers } from '../../../../../shared/domain/value-objects/StatsTotalTurnovers';

export class PUCStatsTotalTurnovers extends StatsTotalTurnovers {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): PUCStatsTotalTurnovers {
    return new PUCStatsTotalTurnovers(value);
  }
}
