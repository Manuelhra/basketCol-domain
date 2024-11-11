import { IdValueObject } from '../../../../../../shared/domain/value-objects/IdValueObject';

export class LSAChampionTeamId extends IdValueObject {
  private constructor(value: string) {
    super(value, 'championTeamId');
  }

  public static create(value: string): LSAChampionTeamId {
    return new LSAChampionTeamId(value);
  }
}
