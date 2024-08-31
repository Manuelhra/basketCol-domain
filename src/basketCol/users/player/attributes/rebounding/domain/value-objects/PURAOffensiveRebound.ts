import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PURAOffensiveRebound extends Attribute {
  constructor(value: number) {
    super(value, 'offensiveRebound');
  }
}
