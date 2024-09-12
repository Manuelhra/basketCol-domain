import { AggregateRoot } from '../../../../../shared/domain/AggregateRoot';
import { IPlayerUserShootingAttributes } from './IPlayerUserShootingAttributes';
import { PUSACloseShot } from './value-objects/PUSACloseShot';
import { PUSACreatedAt } from './value-objects/PUSACreatedAt';
import { PUSAFreeThrow } from './value-objects/PUSAFreeThrow';
import { PUSAMidRangeShot } from './value-objects/PUSAMidRangeShot';
import { PUSAReferencedPlayerUserId } from './value-objects/PUSAReferencedPlayerUserId';
import { PUSAThreePointShot } from './value-objects/PUSAThreePointShot';
import { PUSAUpdatedAt } from './value-objects/PUSAUpdatedAt';
import { PUSAId } from './value-objects/PUSAId';

export class PlayerUserShootingAttributes extends AggregateRoot<IPlayerUserShootingAttributes> {
  readonly #closeShot: PUSACloseShot;

  readonly #midRangeShot: PUSAMidRangeShot;

  readonly #threePointShot: PUSAMidRangeShot;

  readonly #freeThrow: PUSAFreeThrow;

  readonly #playerUserId: PUSAReferencedPlayerUserId;

  constructor(
    id: string,
    closeShot: number,
    midRangeShot: number,
    threePointShot: number,
    freeThrow: number,
    playerUserId: string,
    createdAt: string,
    updatedAt: string,
  ) {
    const pUSAId: PUSAId = new PUSAId(id);
    const pUSACreatedAt: PUSACreatedAt = new PUSACreatedAt(createdAt);
    const pUSAUpdatedAt: PUSAUpdatedAt = new PUSAUpdatedAt(updatedAt);

    super(pUSAId, pUSACreatedAt, pUSAUpdatedAt);

    this.#closeShot = new PUSACloseShot(closeShot);
    this.#midRangeShot = new PUSAMidRangeShot(midRangeShot);
    this.#threePointShot = new PUSAThreePointShot(threePointShot);
    this.#freeThrow = new PUSAFreeThrow(freeThrow);
    this.#playerUserId = new PUSAReferencedPlayerUserId(playerUserId);
  }

  public override toPrimitives(): IPlayerUserShootingAttributes {
    return {
      id: this.id.value,
      closeShot: this.#closeShot.value,
      midRangeShot: this.#midRangeShot.value,
      threePointShot: this.#threePointShot.value,
      freeThrow: this.#freeThrow.value,
      playerUserId: this.#playerUserId.playerUserIdAsString,
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
}
