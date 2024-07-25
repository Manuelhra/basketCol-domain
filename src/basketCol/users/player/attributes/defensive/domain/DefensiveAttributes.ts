import { AggregateRoot } from '../../../../../shared/domain/AggregateRoot';
import { PlayerUserId } from '../../../domain/value-objects/PlayerUserId';
import { IDefensiveAttributes } from './IDefensiveAttributes';
import { DABlock } from './value-objects/DABlock';
import { DACreatedAt } from './value-objects/DACreatedAt';
import { DAUpdatedAt } from './value-objects/DAUpdatedAt';
import { DefensiveAttributesId } from './value-objects/DefensiveAttributesId';
import { DAInteriorDefense } from './value-objects/DAInteriorDefense';
import { DAPerimeterDefense } from './value-objects/DAPerimeterDefense';
import { DASteal } from './value-objects/DASteal';

export class DefensiveAttributes extends AggregateRoot<IDefensiveAttributes> {
  readonly #interiorDefense: DAInteriorDefense;

  readonly #perimeterDefense: DAPerimeterDefense;

  readonly #steal: DASteal;

  readonly #block: DABlock;

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

    this.#interiorDefense = new DAInteriorDefense(interiorDefense);
    this.#perimeterDefense = new DAPerimeterDefense(perimeterDefense);
    this.#steal = new DASteal(steal);
    this.#block = new DABlock(block);
    this.#playerUserId = new PlayerUserId(playerUserId, 'playerUserId');
  }

  public toPrimitives(): IDefensiveAttributes {
    return {
      id: this.id.value,
      interiorDefense: this.#interiorDefense.value,
      perimeterDefense: this.#perimeterDefense.value,
      steal: this.#steal.value,
      block: this.#block.value,
      playerUserId: this.#playerUserId.value,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }
}

