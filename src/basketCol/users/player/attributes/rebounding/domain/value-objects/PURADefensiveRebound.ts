import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PURADefensiveRebound extends Attribute {
  constructor(value: number) {
    super(value, 'defensiveRebound');
  }
}
