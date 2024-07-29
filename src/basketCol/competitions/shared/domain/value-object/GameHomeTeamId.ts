import { ReferencedTeamId } from '../../../../shared/domain/value-objects/ReferencedTeamId';

export abstract class GameHomeTeamId extends ReferencedTeamId {
  protected constructor(value: string) {
    super(value, 'homeTeamId');
  }
}
