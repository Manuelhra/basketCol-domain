import { ReferencedPlayerUserId } from '../../../../../../shared/domain/value-objects/ReferencedPlayerUserId';

export class PUPAReferencedPlayerUserId extends ReferencedPlayerUserId {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): PUPAReferencedPlayerUserId {
    return new PUPAReferencedPlayerUserId(value);
  }
}
