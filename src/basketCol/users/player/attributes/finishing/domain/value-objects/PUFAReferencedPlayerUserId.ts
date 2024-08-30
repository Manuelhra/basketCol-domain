import { ReferencedPlayerUserId } from '../../../../../../shared/domain/value-objects/ReferencedPlayerUserId';

export class PUFAReferencedPlayerUserId extends ReferencedPlayerUserId {
  public constructor(value: string) {
    super(value);
  }
}
