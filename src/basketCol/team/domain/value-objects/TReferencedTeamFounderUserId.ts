import { ReferencedTeamFounderUserId } from '../../../shared/domain/value-objects/ReferencedTeamFounderUserId';

export class TReferencedTeamFounderUserId extends ReferencedTeamFounderUserId {
  public constructor(value: string) {
    super(value);
  }
}
