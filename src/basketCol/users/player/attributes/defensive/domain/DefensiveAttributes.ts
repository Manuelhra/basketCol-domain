import AggregateRoot from '../../../../../shared/domain/AggregateRoot';
import { IDefensiveAttributes } from './IDefensiveAttributes';
import Block from './value-objects/Block';
import DefensiveAttributesId from './value-objects/DefensiveAttributesId';
import InteriorDefense from './value-objects/InteriorDefense';
import PerimeterDefense from './value-objects/PerimeterDefense';
import Steal from './value-objects/Steal';

class DefensiveAttributes extends AggregateRoot {
  readonly #interiorDefense: InteriorDefense;

  readonly #perimeterDefense: PerimeterDefense;

  readonly #steal: Steal;

  readonly #block: Block;

  constructor(
    id: string,
    interiorDefense: number,
    perimeterDefense: number,
    steal: number,
    block: number,
  ) {
    super(new DefensiveAttributesId(id));

    this.#interiorDefense = new InteriorDefense(interiorDefense);
    this.#perimeterDefense = new PerimeterDefense(perimeterDefense);
    this.#steal = new Steal(steal);
    this.#block = new Block(block);
  }

  public toPrimitives(): IDefensiveAttributes {
    return {
      id: this.id.getValue(),
      interiorDefense: this.#interiorDefense.getValue(),
      perimeterDefense: this.#perimeterDefense.getValue(),
      steal: this.#steal.getValue(),
      block: this.#block.getValue(),
    };
  }
}

export default DefensiveAttributes;
