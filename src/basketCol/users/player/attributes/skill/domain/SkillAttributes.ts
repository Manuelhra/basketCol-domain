import { AggregateRoot } from '../../../../../shared/domain/AggregateRoot';
import { PlayerUserId } from '../../../domain/value-objects/PlayerUserId';
import { ISkillAttributes } from './ISkillAttributes';
import { SABallHandle } from './value-objects/SABallHandle';
import { SACreatedAt } from './value-objects/SACreatedAt';
import { SAPassAccuracy } from './value-objects/SAPassAccuracy';
import { SASpeedWithBall } from './value-objects/SASpeedWithBall';
import { SAUpdatedAt } from './value-objects/SAUpdatedAt';
import { SkillAttributesId } from './value-objects/SkillAttributesId';

export class SkillAttributes extends AggregateRoot<ISkillAttributes> {
  readonly #passAccuracy: SAPassAccuracy;

  readonly #ballHandle: SABallHandle;

  readonly #speedWithBall: SASpeedWithBall;

  readonly #playerUserId: PlayerUserId;

  constructor(
    id: string,
    passAccuracy: number,
    ballHandle: number,
    speedWithBall: number,
    playerUserId: string,
    createdAt: string,
    updatedAt: string,
  ) {
    const skillAttributesId: SkillAttributesId = new SkillAttributesId(id);
    const sACreatedAt: SACreatedAt = new SACreatedAt(createdAt);
    const sAUpdatedAt: SAUpdatedAt = new SAUpdatedAt(updatedAt);

    super(skillAttributesId, sACreatedAt, sAUpdatedAt);

    this.#passAccuracy = new SAPassAccuracy(passAccuracy);
    this.#ballHandle = new SABallHandle(ballHandle);
    this.#speedWithBall = new SASpeedWithBall(speedWithBall);
    this.#playerUserId = new PlayerUserId(playerUserId);
  }

  public toPrimitives(): ISkillAttributes {
    return {
      id: this.id.getValue(),
      passAccuracy: this.#passAccuracy.getValue(),
      ballHandle: this.#ballHandle.getValue(),
      speedWithBall: this.#speedWithBall.getValue(),
      playerUserId: this.#playerUserId.getValue(),
      createdAt: this.createdAt.getValue(),
      updatedAt: this.updatedAt.getValue(),
    };
  }
}

