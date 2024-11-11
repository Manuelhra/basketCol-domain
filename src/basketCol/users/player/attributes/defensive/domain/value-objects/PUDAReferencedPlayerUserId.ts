import { IdValueObject } from '../../../../../../shared/domain/value-objects/IdValueObject';

export class PUDAReferencedPlayerUserId extends IdValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): PUDAReferencedPlayerUserId {
    return new PUDAReferencedPlayerUserId(value);
  }
}
