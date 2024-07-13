import AggregateRoot from '../../../../../shared/domain/AggregateRoot';
import Block from './value-objects/Block';
import InteriorDefense from './value-objects/InteriorDefense';
import OffensiveRebound from './value-objects/OffensiveRebound';
import PerimeterDefense from './value-objects/PerimeterDefense';
import Steal from './value-objects/Steal';

class DefensiveAttributes extends AggregateRoot {
  readonly #interiorDefense: InteriorDefense;

  readonly #perimeterDefense: PerimeterDefense;

  readonly #steal: Steal;

  readonly #block: Block;

  readonly #offensiveRebound: OffensiveRebound;
}

export default DefensiveAttributes;
