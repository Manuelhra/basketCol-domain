import { ReferencedPlayerUserId } from '../../../../../../shared/domain/value-objects/ReferencedPlayerUserId';

export class PURAReferencedPlayerUserId extends ReferencedPlayerUserId {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): PURAReferencedPlayerUserId {
    return new PURAReferencedPlayerUserId(value);
  }
}
