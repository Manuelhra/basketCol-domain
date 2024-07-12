import Attributes from '../../../shared/domain/value-objects/Attributes';

class OffensiveRebound extends Attributes {
  constructor(value: number) {
    super(value, 'offensiveRebound');
  }
}

export default OffensiveRebound;
