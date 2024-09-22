import { ReferencedTeamId } from '../../../../../../shared/domain/value-objects/ReferencedTeamId';

export class LSAChampionTeamId extends ReferencedTeamId {
  public constructor(value: string) {
    super(value, 'championTeamId');
  }

  public static create(value: string): LSAChampionTeamId {
    return new LSAChampionTeamId(value);
  }
}
