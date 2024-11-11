import { AttributeCategory } from '../../shared/domain/value-objects/AttributeCategory';
import { IPlayerUserDefensiveAttributesPrimitives } from './IPlayerUserDefensiveAttributesPrimitives';
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

export class PlayerUserDefensiveAttributes extends AttributeCategory<IPlayerUserDefensiveAttributesPrimitives> {
  readonly #interiorDefense: PUDAInteriorDefense;

  readonly #perimeterDefense: PUDAPerimeterDefense;

  readonly #steal: PUDASteal;

  readonly #block: PUDABlock;

  readonly #playerUserId: PUDAReferencedPlayerUserId;

  private constructor(
    id: string,
    interiorDefense: number,
    perimeterDefense: number,
    steal: number,
    block: number,
    playerUserId: string,
    createdAt: string,
    updatedAt: string,
  ) {
    const pUDAId: PUDAId = PUDAId.create(id);
    const pUDACreatedAt: PUDACreatedAt = PUDACreatedAt.create(createdAt);
    const pUDAUpdatedAt: PUDAUpdatedAt = PUDAUpdatedAt.create(updatedAt);

    super(pUDAId, pUDACreatedAt, pUDAUpdatedAt);

    this.#interiorDefense = PUDAInteriorDefense.create(interiorDefense);
    this.#perimeterDefense = PUDAPerimeterDefense.create(perimeterDefense);
    this.#steal = PUDASteal.create(steal);
    this.#block = PUDABlock.create(block);
    this.#playerUserId = PUDAReferencedPlayerUserId.create(playerUserId);
  }

  public override get toPrimitives(): IPlayerUserDefensiveAttributesPrimitives {
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

  public static override create(
    id: string,
    interiorDefense: number,
    perimeterDefense: number,
    steal: number,
    block: number,
    playerUserId: string,
    createdAt: string,
    updatedAt: string,
  ): PlayerUserDefensiveAttributes {
    return new PlayerUserDefensiveAttributes(
      id,
      interiorDefense,
      perimeterDefense,
      steal,
      block,
      playerUserId,
      createdAt,
      updatedAt,
    );
  }

  public static override fromPrimitives(
    id: string,
    interiorDefense: number,
    perimeterDefense: number,
    steal: number,
    block: number,
    playerUserId: string,
    createdAt: string,
    updatedAt: string,
  ): PlayerUserDefensiveAttributes {
    return new PlayerUserDefensiveAttributes(
      id,
      interiorDefense,
      perimeterDefense,
      steal,
      block,
      playerUserId,
      createdAt,
      updatedAt,
    );
  }
}
