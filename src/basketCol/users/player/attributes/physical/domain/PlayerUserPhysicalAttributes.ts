import { AggregateRoot } from '../../../../../shared/domain/AggregateRoot';
import { IPlayerUserPhysicalAttributes } from './IPlayerUserPhysicalAttributes';
import { PUPAAcceleration } from './value-objects/PUPAAcceleration';
import { PUPACreatedAt } from './value-objects/PUPACreatedAt';
import { PUPAReferencedPlayerUserId } from './value-objects/PUPAReferencedPlayerUserId';
import { PUPASpeed } from './value-objects/PUPASpeed';
import { PUPAStamina } from './value-objects/PUPAStamina';
import { PUPAStrength } from './value-objects/PUPAStrength';
import { PUPAUpdatedAt } from './value-objects/PUPAUpdatedAt';
import { PUPAVertical } from './value-objects/PUPAVertical';
import { PUPAId } from './value-objects/PUPAId';

export class PlayerUserPhysicalAttributes extends AggregateRoot<IPlayerUserPhysicalAttributes> {
  readonly #speed: PUPASpeed;

  readonly #acceleration: PUPAAcceleration;

  readonly #strength: PUPAStrength;

  readonly #vertical: PUPAVertical;

  readonly #stamina: PUPAStamina;

  readonly #playerUserId: PUPAReferencedPlayerUserId;

  constructor(
    id: string,
    speed: number,
    acceleration: number,
    strength: number,
    vertical: number,
    stamina: number,
    playerUserId: string,
    createdAt: string,
    updatedAt: string,
  ) {
    const pUPAId: PUPAId = new PUPAId(id);
    const pUPACreatedAt: PUPACreatedAt = new PUPACreatedAt(createdAt);
    const pUPAUpdatedAt: PUPAUpdatedAt = new PUPAUpdatedAt(updatedAt);

    super(pUPAId, pUPACreatedAt, pUPAUpdatedAt);

    this.#speed = new PUPASpeed(speed);
    this.#acceleration = new PUPAAcceleration(acceleration);
    this.#strength = new PUPAStrength(strength);
    this.#vertical = new PUPAVertical(vertical);
    this.#stamina = new PUPAStamina(stamina);
    this.#playerUserId = new PUPAReferencedPlayerUserId(playerUserId);
  }

  public toPrimitives(): IPlayerUserPhysicalAttributes {
    return {
      id: this.id.value,
      speed: this.#speed.value,
      acceleration: this.#acceleration.value,
      strength: this.#strength.value,
      vertical: this.#vertical.value,
      stamina: this.#stamina.value,
      playerUserId: this.#playerUserId.playerUserIdAsString,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }
}
