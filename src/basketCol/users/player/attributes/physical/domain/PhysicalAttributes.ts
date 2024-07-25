import { AggregateRoot } from '../../../../../shared/domain/AggregateRoot';
import { PlayerUserId } from '../../../domain/value-objects/PlayerUserId';
import { IPhysicalAttributes } from './IPhysicalAttributes';
import { PAAcceleration } from './value-objects/PAAcceleration';
import { PACreatedAt } from './value-objects/PACreatedAt';
import { PASpeed } from './value-objects/PASpeed';
import { PAStamina } from './value-objects/PAStamina';
import { PAStrength } from './value-objects/PAStrength';
import { PAUpdatedAt } from './value-objects/PAUpdatedAt';
import { PAVertical } from './value-objects/PAVertical';
import { PhysicalAttributesId } from './value-objects/PhysicalAttributesId';

export class PhysicalAttributes extends AggregateRoot<IPhysicalAttributes> {
  readonly #speed: PASpeed;

  readonly #acceleration: PAAcceleration;

  readonly #strength: PAStrength;

  readonly #vertical: PAVertical;

  readonly #stamina: PAStamina;

  readonly #playerUserId: PlayerUserId;

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
    const physicalAttributesId: PhysicalAttributesId = new PhysicalAttributesId(id);
    const pACreatedAt: PACreatedAt = new PACreatedAt(createdAt);
    const pAUpdatedAt: PAUpdatedAt = new PAUpdatedAt(updatedAt);

    super(physicalAttributesId, pACreatedAt, pAUpdatedAt);

    this.#speed = new PASpeed(speed);
    this.#acceleration = new PAAcceleration(acceleration);
    this.#strength = new PAStrength(strength);
    this.#vertical = new PAVertical(vertical);
    this.#stamina = new PAStamina(stamina);
    this.#playerUserId = new PlayerUserId(playerUserId, 'playerUserId');
  }

  public toPrimitives(): IPhysicalAttributes {
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
}

