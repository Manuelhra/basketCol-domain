import { ReferencedPlayerUserId } from '../../../../../../shared/domain/value-objects/ReferencedPlayerUserId';

export class PUDAReferencedPlayerUserId extends ReferencedPlayerUserId {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): PUDAReferencedPlayerUserId {
    return new PUDAReferencedPlayerUserId(value);
  }
}
