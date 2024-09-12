import { AggregateRoot } from '../../../../../shared/domain/AggregateRoot';
import { IPlayerUserSkillAttributes } from './IPlayerUserSkillAttributes';
import { PUSABallHandle } from './value-objects/PUSABallHandle';
import { PUSACreatedAt } from './value-objects/PUSACreatedAt';
import { PUSAPassAccuracy } from './value-objects/PUSAPassAccuracy';
import { PUSASpeedWithBall } from './value-objects/PUSASpeedWithBall';
import { PUSAReferencedPlayerUserId } from './value-objects/PUSAReferencedPlayerUserId';
import { PUSAUpdatedAt } from './value-objects/PUSAUpdatedAt';
import { PUSAId } from './value-objects/PUSAId';

export class PlayerUserSkillAttributes extends AggregateRoot<IPlayerUserSkillAttributes> {
  readonly #passAccuracy: PUSAPassAccuracy;

  readonly #ballHandle: PUSABallHandle;

  readonly #speedWithBall: PUSASpeedWithBall;

  readonly #playerUserId: PUSAReferencedPlayerUserId;

  constructor(
    id: string,
    passAccuracy: number,
    ballHandle: number,
    speedWithBall: number,
    playerUserId: string,
    createdAt: string,
    updatedAt: string,
  ) {
    const pUSAId: PUSAId = new PUSAId(id);
    const pUSACreatedAt: PUSACreatedAt = new PUSACreatedAt(createdAt);
    const pUSAUpdatedAt: PUSAUpdatedAt = new PUSAUpdatedAt(updatedAt);

    super(pUSAId, pUSACreatedAt, pUSAUpdatedAt);

    this.#passAccuracy = new PUSAPassAccuracy(passAccuracy);
    this.#ballHandle = new PUSABallHandle(ballHandle);
    this.#speedWithBall = new PUSASpeedWithBall(speedWithBall);
    this.#playerUserId = new PUSAReferencedPlayerUserId(playerUserId);
  }

  public override toPrimitives(): IPlayerUserSkillAttributes {
    return {
      id: this.id.value,
      passAccuracy: this.#passAccuracy.value,
      ballHandle: this.#ballHandle.value,
      speedWithBall: this.#speedWithBall.value,
      playerUserId: this.#playerUserId.playerUserIdAsString,
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
}
