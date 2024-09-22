import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PUFAPostControl extends Attribute {
  constructor(value: number) {
    super(value, 'postControl');
  }

  public static create(value: number): PUFAPostControl {
    return new PUFAPostControl(value);
  }
}
