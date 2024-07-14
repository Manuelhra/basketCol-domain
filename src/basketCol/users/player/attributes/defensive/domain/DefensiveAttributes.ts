import AggregateRoot from '../../../../../shared/domain/AggregateRoot';
import PlayerUserId from '../../../domain/value-objects/PlayerUserId';
import { IDefensiveAttributes } from './IDefensiveAttributes';
import Block from './value-objects/Block';
import DACreatedAt from './value-objects/DACreatedAt';
import DAUpdatedAt from './value-objects/DAUpdatedAt';
import DefensiveAttributesId from './value-objects/DefensiveAttributesId';
import InteriorDefense from './value-objects/InteriorDefense';
import PerimeterDefense from './value-objects/PerimeterDefense';
import Steal from './value-objects/Steal';

class DefensiveAttributes extends AggregateRoot<IDefensiveAttributes> {
  readonly #interiorDefense: InteriorDefense;

  readonly #perimeterDefense: PerimeterDefense;

  readonly #steal: Steal;

  readonly #block: Block;

  readonly #playerUserId: PlayerUserId;

  constructor(
    id: string,
    interiorDefense: number,
    perimeterDefense: number,
    steal: number,
    block: number,
    playerUserId: string,
    createdAt: string,
    updatedAt: string,
  ) {
    const defensiveAttributesId: DefensiveAttributesId = new DefensiveAttributesId(id);
    const dACreatedAt: DACreatedAt = new DACreatedAt(createdAt);
    const dAUpdatedAt: DAUpdatedAt = new DAUpdatedAt(updatedAt);

    super(defensiveAttributesId, dACreatedAt, dAUpdatedAt);

    this.#interiorDefense = new InteriorDefense(interiorDefense);
    this.#perimeterDefense = new PerimeterDefense(perimeterDefense);
    this.#steal = new Steal(steal);
    this.#block = new Block(block);
    this.#playerUserId = new PlayerUserId(playerUserId, 'playerUserId');
  }

  public toPrimitives(): IDefensiveAttributes {
    return {
      id: this.id.getValue(),
      interiorDefense: this.#interiorDefense.getValue(),
      perimeterDefense: this.#perimeterDefense.getValue(),
      steal: this.#steal.getValue(),
      block: this.#block.getValue(),
      playerUserId: this.#playerUserId.getValue(),
      createdAt: this.createdAt.getValue(),
      updatedAt: this.updatedAt.getValue(),
    };
  }
}

export default DefensiveAttributes;
