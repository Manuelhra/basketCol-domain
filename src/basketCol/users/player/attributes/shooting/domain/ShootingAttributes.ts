import { AggregateRoot } from '../../../../../shared/domain/AggregateRoot';
import { PlayerUserId } from '../../../domain/value-objects/PlayerUserId';
import { IShootingAttributes } from './IShootingAttributes';
import { SACloseShot } from './value-objects/SACloseShot';
import { SACreatedAt } from './value-objects/SACreatedAt';
import { SAFreeThrow } from './value-objects/SAFreeThrow';
import { SAMidRangeShot } from './value-objects/SAMidRangeShot';
import { SAThreePointShot } from './value-objects/SAThreePointShot';
import { SAUpdatedAt } from './value-objects/SAUpdatedAt';
import { ShootingAttributesId } from './value-objects/ShootingAttributesId';

export class ShootingAttributes extends AggregateRoot<IShootingAttributes> {
  readonly #closeShot: SACloseShot;

  readonly #midRangeShot: SAMidRangeShot;

  readonly #threePointShot: SAMidRangeShot;

  readonly #freeThrow: SAFreeThrow;

  readonly #playerUserId: PlayerUserId;

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
    const shootingAttributesId: ShootingAttributesId = new ShootingAttributesId(id);
    const sACreatedAt: SACreatedAt = new SACreatedAt(createdAt);
    const sAUpdatedAt: SAUpdatedAt = new SAUpdatedAt(updatedAt);

    super(shootingAttributesId, sACreatedAt, sAUpdatedAt);

    this.#closeShot = new SACloseShot(closeShot);
    this.#midRangeShot = new SAMidRangeShot(midRangeShot);
    this.#threePointShot = new SAThreePointShot(threePointShot);
    this.#freeThrow = new SAFreeThrow(freeThrow);
    this.#playerUserId = new PlayerUserId(playerUserId);
  }

  public toPrimitives(): IShootingAttributes {
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
}

