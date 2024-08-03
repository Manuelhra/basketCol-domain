import { ReferencedTeamId } from '../../../../shared/domain/value-objects/ReferencedTeamId';

export abstract class FGameAwayTeamId extends ReferencedTeamId {
  protected constructor(value: string) {
    super(value, 'awayTeamId');
  }
}
