import { FGBoxScoreFixtureGameId } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreFixtureGameId';

export class PLSFGBoxScoreFixtureGameId extends FGBoxScoreFixtureGameId {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): PLSFGBoxScoreFixtureGameId {
    return new PLSFGBoxScoreFixtureGameId(value);
  }
}
