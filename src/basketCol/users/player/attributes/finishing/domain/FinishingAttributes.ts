import { AggregateRoot } from '../../../../../shared/domain/AggregateRoot';
import { IFinishingAttributes } from './IFinishingAttributes';
import { FACreatedAt } from './value-objects/FACreatedAt';
import { FADrivingDunk } from './value-objects/FADrivingDunk';
import { FADrivingLayup } from './value-objects/FADrivingLayup';
import { FAPostControl } from './value-objects/FAPostControl';
import { FAReferencedPlayerUserId } from './value-objects/FAReferencedPlayerUserId';
import { FAStandingDunk } from './value-objects/FAStandingDunk';
import { FAUpdatedAt } from './value-objects/FAUpdatedAt';
import { FinishingAttributesId } from './value-objects/FinishingAttributesId';

export class FinishingAttributes extends AggregateRoot<IFinishingAttributes> {
  readonly #drivingLayup: FADrivingLayup;

  readonly #drivingDunk: FADrivingDunk;

  readonly #standingDunk: FAStandingDunk;

  readonly #postControl: FAPostControl;

  readonly #playerUserId: FAReferencedPlayerUserId;

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
    const finishingAttributesId: FinishingAttributesId = new FinishingAttributesId(id);
    const fACreatedAt: FACreatedAt = new FACreatedAt(createdAt);
    const fAUpdatedAt: FAUpdatedAt = new FAUpdatedAt(updatedAt);

    super(finishingAttributesId, fACreatedAt, fAUpdatedAt);

    this.#drivingLayup = new FADrivingLayup(drivingLayup);
    this.#drivingDunk = new FADrivingDunk(drivingDunk);
    this.#standingDunk = new FAStandingDunk(standingDunk);
    this.#postControl = new FAPostControl(postControl);
    this.#playerUserId = new FAReferencedPlayerUserId(playerUserId);
  }

  public toPrimitives(): IFinishingAttributes {
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
}
