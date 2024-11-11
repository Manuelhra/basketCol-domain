import { IPlayerUserPhysicalAttributesPrimitives } from './IPlayerUserPhysicalAttributesPrimitives';
import { PUPAAcceleration } from './value-objects/PUPAAcceleration';
import { PUPACreatedAt } from './value-objects/PUPACreatedAt';
import { PUPAPlayerUserId } from './value-objects/PUPAPlayerUserId';
import { PUPASpeed } from './value-objects/PUPASpeed';
import { PUPAStamina } from './value-objects/PUPAStamina';
import { PUPAStrength } from './value-objects/PUPAStrength';
import { PUPAUpdatedAt } from './value-objects/PUPAUpdatedAt';
import { PUPAVertical } from './value-objects/PUPAVertical';
import { PUPAId } from './value-objects/PUPAId';
import { AttributeCategory } from '../../shared/domain/value-objects/AttributeCategory';

export class PlayerUserPhysicalAttributes extends AttributeCategory<IPlayerUserPhysicalAttributesPrimitives> {
  readonly #speed: PUPASpeed;

  readonly #acceleration: PUPAAcceleration;

  readonly #strength: PUPAStrength;

  readonly #vertical: PUPAVertical;

  readonly #stamina: PUPAStamina;

  readonly #playerUserId: PUPAPlayerUserId;

  private constructor(
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
    this.#playerUserId = PUPAPlayerUserId.create(playerUserId);
  }

  public override get toPrimitives(): IPlayerUserPhysicalAttributesPrimitives {
    return {
      id: this.id.value,
      speed: this.#speed.value,
      acceleration: this.#acceleration.value,
      strength: this.#strength.value,
      vertical: this.#vertical.value,
      stamina: this.#stamina.value,
      playerUserId: this.#playerUserId.value,
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

  public static override fromPrimitives(
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
