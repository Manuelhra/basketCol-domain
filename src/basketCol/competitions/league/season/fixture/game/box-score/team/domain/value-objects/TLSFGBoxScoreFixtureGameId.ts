import { FGBoxScoreFixtureGameId } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreFixtureGameId';

export class TLSFGBoxScoreFixtureGameId extends FGBoxScoreFixtureGameId {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): TLSFGBoxScoreFixtureGameId {
    return new TLSFGBoxScoreFixtureGameId(value);
  }
}
