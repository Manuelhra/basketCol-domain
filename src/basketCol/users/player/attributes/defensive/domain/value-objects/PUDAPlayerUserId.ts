import { IdValueObject } from '../../../../../../shared/domain/value-objects/IdValueObject';

export class PUDAPlayerUserId extends IdValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): PUDAPlayerUserId {
    return new PUDAPlayerUserId(value);
  }
}
