import { IPlayerUserSkillAttributesPrimitives } from './IPlayerUserSkillAttributesPrimitives';
import { PUSABallHandle } from './value-objects/PUSABallHandle';
import { PUSACreatedAt } from './value-objects/PUSACreatedAt';
import { PUSAPassAccuracy } from './value-objects/PUSAPassAccuracy';
import { PUSASpeedWithBall } from './value-objects/PUSASpeedWithBall';
import { PUSAReferencedPlayerUserId } from './value-objects/PUSAReferencedPlayerUserId';
import { PUSAUpdatedAt } from './value-objects/PUSAUpdatedAt';
import { PUSAId } from './value-objects/PUSAId';
import { AttributeCategory } from '../../shared/domain/value-objects/AttributeCategory';

export class PlayerUserSkillAttributes extends AttributeCategory<IPlayerUserSkillAttributesPrimitives> {
  readonly #passAccuracy: PUSAPassAccuracy;

  readonly #ballHandle: PUSABallHandle;

  readonly #speedWithBall: PUSASpeedWithBall;

  readonly #playerUserId: PUSAReferencedPlayerUserId;

  private constructor(
    id: string,
    passAccuracy: number,
    ballHandle: number,
    speedWithBall: number,
    playerUserId: string,
    createdAt: string,
    updatedAt: string,
  ) {
    const pUSAId: PUSAId = PUSAId.create(id);
    const pUSACreatedAt: PUSACreatedAt = PUSACreatedAt.create(createdAt);
    const pUSAUpdatedAt: PUSAUpdatedAt = PUSAUpdatedAt.create(updatedAt);

    super(pUSAId, pUSACreatedAt, pUSAUpdatedAt);

    this.#passAccuracy = PUSAPassAccuracy.create(passAccuracy);
    this.#ballHandle = PUSABallHandle.create(ballHandle);
    this.#speedWithBall = PUSASpeedWithBall.create(speedWithBall);
    this.#playerUserId = PUSAReferencedPlayerUserId.create(playerUserId);
  }

  public override get toPrimitives(): IPlayerUserSkillAttributesPrimitives {
    return {
      id: this.id.value,
      passAccuracy: this.#passAccuracy.value,
      ballHandle: this.#ballHandle.value,
      speedWithBall: this.#speedWithBall.value,
      playerUserId: this.#playerUserId.value,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }

  public static override create(
    id: string,
    passAccuracy: number,
    ballHandle: number,
    speedWithBall: number,
    playerUserId: string,
    createdAt: string,
    updatedAt: string,
  ): PlayerUserSkillAttributes {
    return new PlayerUserSkillAttributes(
      id,
      passAccuracy,
      ballHandle,
      speedWithBall,
      playerUserId,
      createdAt,
      updatedAt,
    );
  }

  public static override fromPrimitives(
    id: string,
    passAccuracy: number,
    ballHandle: number,
    speedWithBall: number,
    playerUserId: string,
    createdAt: string,
    updatedAt: string,
  ): PlayerUserSkillAttributes {
    return new PlayerUserSkillAttributes(
      id,
      passAccuracy,
      ballHandle,
      speedWithBall,
      playerUserId,
      createdAt,
      updatedAt,
    );
  }
}
