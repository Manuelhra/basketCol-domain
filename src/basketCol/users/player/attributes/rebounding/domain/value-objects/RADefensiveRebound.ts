import Attribute from '../../../shared/domain/value-objects/Attribute';

class RADefensiveRebound extends Attribute {
  constructor(value: number) {
    super(value, 'defensiveRebound');
  }
}

export default RADefensiveRebound;
