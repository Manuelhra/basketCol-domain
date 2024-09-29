import { ReferencedPlayerUserId } from '../../../../../../shared/domain/value-objects/ReferencedPlayerUserId';

export class PUFAReferencedPlayerUserId extends ReferencedPlayerUserId {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): PUFAReferencedPlayerUserId {
    return new PUFAReferencedPlayerUserId(value);
  }
}
