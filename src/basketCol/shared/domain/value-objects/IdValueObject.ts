import { UuidValueObject } from './UuidValueObject';

export class IdValueObject extends UuidValueObject {
  constructor(value: string) {
    super(value, 'id');
  }
}

