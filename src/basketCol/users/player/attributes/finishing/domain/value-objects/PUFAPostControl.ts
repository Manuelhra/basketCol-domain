import { SubAttribute } from '../../../shared/domain/value-objects/SubAttribute';

export class PUFAPostControl extends SubAttribute {
  private constructor(value: number) {
    super(value, 'postControl');
  }

  public static create(value: number): PUFAPostControl {
    return new PUFAPostControl(value);
  }
}
