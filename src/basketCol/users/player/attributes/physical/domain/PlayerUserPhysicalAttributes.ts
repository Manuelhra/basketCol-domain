import { AggregateRoot } from '../../../../../shared/domain/AggregateRoot';
import { IPlayerUserPhysicalAttributesPrimitives } from './IPlayerUserPhysicalAttributesPrimitives';
import { PUPAAcceleration } from './value-objects/PUPAAcceleration';
import { PUPACreatedAt } from './value-objects/PUPACreatedAt';
import { PUPAReferencedPlayerUserId } from './value-objects/PUPAReferencedPlayerUserId';
import { PUPASpeed } from './value-objects/PUPASpeed';
import { PUPAStamina } from './value-objects/PUPAStamina';
import { PUPAStrength } from './value-objects/PUPAStrength';
import { PUPAUpdatedAt } from './value-objects/PUPAUpdatedAt';
import { PUPAVertical } from './value-objects/PUPAVertical';
import { PUPAId } from './value-objects/PUPAId';

export class PlayerUserPhysicalAttributes extends AggregateRoot<IPlayerUserPhysicalAttributesPrimitives> {
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
    const pUPAId: PUPAId = PUPAId.create(id);
    const pUPACreatedAt: PUPACreatedAt = PUPACreatedAt.create(createdAt);
    const pUPAUpdatedAt: PUPAUpdatedAt = PUPAUpdatedAt.create(updatedAt);

    super(pUPAId, pUPACreatedAt, pUPAUpdatedAt);

    this.#speed = PUPASpeed.create(speed);
    this.#acceleration = PUPAAcceleration.create(acceleration);
    this.#strength = PUPAStrength.create(strength);
    this.#vertical = PUPAVertical.create(vertical);
    this.#stamina = PUPAStamina.create(stamina);
    this.#playerUserId = PUPAReferencedPlayerUserId.create(playerUserId);
  }

  public override toPrimitives(): IPlayerUserPhysicalAttributesPrimitives {
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

  public static override create(
    id: string,
    speed: number,
    acceleration: number,
    strength: number,
    vertical: number,
    stamina: number,
    playerUserId: string,
    createdAt: string,
    updatedAt: string,
  ): PlayerUserPhysicalAttributes {
    return new PlayerUserPhysicalAttributes(
      id,
      speed,
      acceleration,
      strength,
      vertical,
      stamina,
      playerUserId,
      createdAt,
      updatedAt,
    );
  }
}
