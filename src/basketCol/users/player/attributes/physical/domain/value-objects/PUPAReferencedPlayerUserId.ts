import { ReferencedPlayerUserId } from '../../../../../../shared/domain/value-objects/ReferencedPlayerUserId';

export class PUPAReferencedPlayerUserId extends ReferencedPlayerUserId {
  public constructor(value: string) {
    super(value);
  }
}
