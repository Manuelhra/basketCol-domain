import { ReferencedTeamId } from '../../../../shared/domain/value-objects/ReferencedTeamId';

export abstract class FGameHomeTeamId extends ReferencedTeamId {
  protected constructor(value: string) {
    super(value, 'homeTeamId');
  }
}
