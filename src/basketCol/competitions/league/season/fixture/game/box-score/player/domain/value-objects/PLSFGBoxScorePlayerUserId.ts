import { IdValueObject } from '../../../../../../../../../shared/domain/value-objects/IdValueObject';

export class PLSFGBoxScorePlayerUserId extends IdValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): PLSFGBoxScorePlayerUserId {
    return new PLSFGBoxScorePlayerUserId(value);
  }
}
