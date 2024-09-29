import { ReferencedPlayerUserId } from '../../../../../../shared/domain/value-objects/ReferencedPlayerUserId';

export class PUSAReferencedPlayerUserId extends ReferencedPlayerUserId {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): PUSAReferencedPlayerUserId {
    return new PUSAReferencedPlayerUserId(value);
  }
}
