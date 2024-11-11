import { IPlayerUserShootingAttributesPrimitives } from './IPlayerUserShootingAttributesPrimitives';
import { PUSACloseShot } from './value-objects/PUSACloseShot';
import { PUSACreatedAt } from './value-objects/PUSACreatedAt';
import { PUSAFreeThrow } from './value-objects/PUSAFreeThrow';
import { PUSAMidRangeShot } from './value-objects/PUSAMidRangeShot';
import { PUSAReferencedPlayerUserId } from './value-objects/PUSAReferencedPlayerUserId';
import { PUSAThreePointShot } from './value-objects/PUSAThreePointShot';
import { PUSAUpdatedAt } from './value-objects/PUSAUpdatedAt';
import { PUSAId } from './value-objects/PUSAId';
import { AttributeCategory } from '../../shared/domain/value-objects/AttributeCategory';

export class PlayerUserShootingAttributes extends AttributeCategory<IPlayerUserShootingAttributesPrimitives> {
  readonly #closeShot: PUSACloseShot;

  readonly #midRangeShot: PUSAMidRangeShot;

  readonly #threePointShot: PUSAMidRangeShot;

  readonly #freeThrow: PUSAFreeThrow;

  readonly #playerUserId: PUSAReferencedPlayerUserId;

  private constructor(
    id: string,
    closeShot: number,
    midRangeShot: number,
    threePointShot: number,
    freeThrow: number,
    playerUserId: string,
    createdAt: string,
    updatedAt: string,
  ) {
    const pUSAId: PUSAId = PUSAId.create(id);
    const pUSACreatedAt: PUSACreatedAt = PUSACreatedAt.create(createdAt);
    const pUSAUpdatedAt: PUSAUpdatedAt = PUSAUpdatedAt.create(updatedAt);

    super(pUSAId, pUSACreatedAt, pUSAUpdatedAt);

    this.#closeShot = PUSACloseShot.create(closeShot);
    this.#midRangeShot = PUSAMidRangeShot.create(midRangeShot);
    this.#threePointShot = PUSAThreePointShot.create(threePointShot);
    this.#freeThrow = PUSAFreeThrow.create(freeThrow);
    this.#playerUserId = PUSAReferencedPlayerUserId.create(playerUserId);
  }

  public override get toPrimitives(): IPlayerUserShootingAttributesPrimitives {
    return {
      id: this.id.value,
      closeShot: this.#closeShot.value,
      midRangeShot: this.#midRangeShot.value,
      threePointShot: this.#threePointShot.value,
      freeThrow: this.#freeThrow.value,
      playerUserId: this.#playerUserId.value,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }

  public static override create(
    id: string,
    closeShot: number,
    midRangeShot: number,
    threePointShot: number,
    freeThrow: number,
    playerUserId: string,
    createdAt: string,
    updatedAt: string,
  ): PlayerUserShootingAttributes {
    return new PlayerUserShootingAttributes(
      id,
      closeShot,
      midRangeShot,
      threePointShot,
      freeThrow,
      playerUserId,
      createdAt,
      updatedAt,
    );
  }

  public static override fromPrimitives(
    id: string,
    closeShot: number,
    midRangeShot: number,
    threePointShot: number,
    freeThrow: number,
    playerUserId: string,
    createdAt: string,
    updatedAt: string,
  ): PlayerUserShootingAttributes {
    return new PlayerUserShootingAttributes(
      id,
      closeShot,
      midRangeShot,
      threePointShot,
      freeThrow,
      playerUserId,
      createdAt,
      updatedAt,
    );
  }
}
