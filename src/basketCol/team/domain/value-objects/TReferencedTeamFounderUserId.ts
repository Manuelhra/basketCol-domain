import { ReferencedTeamFounderUserId } from '../../../shared/domain/value-objects/ReferencedTeamFounderUserId';

export class TReferencedTeamFounderUserId extends ReferencedTeamFounderUserId {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): TReferencedTeamFounderUserId {
    return new TReferencedTeamFounderUserId(value);
  }
}
