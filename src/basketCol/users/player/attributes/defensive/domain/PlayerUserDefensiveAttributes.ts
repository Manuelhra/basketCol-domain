import { AggregateRoot } from '../../../../../shared/domain/AggregateRoot';
import { IPlayerUserDefensiveAttributes } from './IPlayerUserDefensiveAttributes';
import {
  PUDAInteriorDefense,
  PUDAPerimeterDefense,
  PUDASteal,
  PUDABlock,
  PUDAReferencedPlayerUserId,
  PUDAId,
  PUDACreatedAt,
  PUDAUpdatedAt,
} from './value-objects';

export class PlayerUserDefensiveAttributes extends AggregateRoot<IPlayerUserDefensiveAttributes> {
  readonly #interiorDefense: PUDAInteriorDefense;

  readonly #perimeterDefense: PUDAPerimeterDefense;

  readonly #steal: PUDASteal;

  readonly #block: PUDABlock;

  readonly #playerUserId: PUDAReferencedPlayerUserId;

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
    const pUDAId: PUDAId = new PUDAId(id);
    const pUDACreatedAt: PUDACreatedAt = new PUDACreatedAt(createdAt);
    const pUDAUpdatedAt: PUDAUpdatedAt = new PUDAUpdatedAt(updatedAt);

    super(pUDAId, pUDACreatedAt, pUDAUpdatedAt);

    this.#interiorDefense = new PUDAInteriorDefense(interiorDefense);
    this.#perimeterDefense = new PUDAPerimeterDefense(perimeterDefense);
    this.#steal = new PUDASteal(steal);
    this.#block = new PUDABlock(block);
    this.#playerUserId = new PUDAReferencedPlayerUserId(playerUserId);
  }

  public toPrimitives(): IPlayerUserDefensiveAttributes {
    return {
      id: this.id.value,
      interiorDefense: this.#interiorDefense.value,
      perimeterDefense: this.#perimeterDefense.value,
      steal: this.#steal.value,
      block: this.#block.value,
      playerUserId: this.#playerUserId.playerUserIdAsString,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }
}
