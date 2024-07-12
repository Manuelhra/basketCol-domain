import Attributes from '../../../shared/domain/value-objects/Attributes';

class DefensiveRebound extends Attributes {
  constructor(value: number) {
    super(value, 'defensiveRebound');
  }
}

export default DefensiveRebound;
