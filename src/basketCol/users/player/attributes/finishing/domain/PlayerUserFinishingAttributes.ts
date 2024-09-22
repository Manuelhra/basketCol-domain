import { AggregateRoot } from '../../../../../shared/domain/AggregateRoot';
import { IPlayerUserFinishingAttributes } from './IPlayerUserFinishingAttributes';
import { PUFACreatedAt } from './value-objects/PUFACreatedAt';
import { PUFADrivingDunk } from './value-objects/PUFADrivingDunk';
import { PUFADrivingLayup } from './value-objects/PUFADrivingLayup';
import { PUFAPostControl } from './value-objects/PUFAPostControl';
import { PUFAReferencedPlayerUserId } from './value-objects/PUFAReferencedPlayerUserId';
import { PUFAStandingDunk } from './value-objects/PUFAStandingDunk';
import { PUFAUpdatedAt } from './value-objects/PUFAUpdatedAt';
import { PUFAId } from './value-objects/PUFAId';

export class PlayerUserFinishingAttributes extends AggregateRoot<IPlayerUserFinishingAttributes> {
  readonly #drivingLayup: PUFADrivingLayup;

  readonly #drivingDunk: PUFADrivingDunk;

  readonly #standingDunk: PUFAStandingDunk;

  readonly #postControl: PUFAPostControl;

  readonly #playerUserId: PUFAReferencedPlayerUserId;

  constructor(
    id: string,
    drivingLayup: number,
    drivingDunk: number,
    standingDunk: number,
    postControl: number,
    playerUserId: string,
    createdAt: string,
    updatedAt: string,
  ) {
    const pUFAId: PUFAId = PUFAId.create(id);
    const pUFACreatedAt: PUFACreatedAt = PUFACreatedAt.create(createdAt);
    const pUFAUpdatedAt: PUFAUpdatedAt = PUFAUpdatedAt.create(updatedAt);

    super(pUFAId, pUFACreatedAt, pUFAUpdatedAt);

    this.#drivingLayup = PUFADrivingLayup.create(drivingLayup);
    this.#drivingDunk = PUFADrivingDunk.create(drivingDunk);
    this.#standingDunk = PUFAStandingDunk.create(standingDunk);
    this.#postControl = PUFAPostControl.create(postControl);
    this.#playerUserId = PUFAReferencedPlayerUserId.create(playerUserId);
  }

  public override toPrimitives(): IPlayerUserFinishingAttributes {
    return {
      id: this.id.value,
      drivingLayup: this.#drivingLayup.value,
      drivingDunk: this.#drivingDunk.value,
      standingDunk: this.#standingDunk.value,
      postControl: this.#postControl.value,
      playerUserId: this.#playerUserId.playerUserIdAsString,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }

  public static override create(
    id: string,
    drivingLayup: number,
    drivingDunk: number,
    standingDunk: number,
    postControl: number,
    playerUserId: string,
    createdAt: string,
    updatedAt: string,
  ): PlayerUserFinishingAttributes {
    return new PlayerUserFinishingAttributes(
      id,
      drivingLayup,
      drivingDunk,
      standingDunk,
      postControl,
      playerUserId,
      createdAt,
      updatedAt,
    );
  }
}
