import { AggregateRoot } from '../../../../../shared/domain/AggregateRoot';
import { PlayerUserId } from '../../../domain/value-objects/PlayerUserId';
import { IFinishingAttributes } from './IFinishingAttributes';
import { FACreatedAt } from './value-objects/FACreatedAt';
import { FADrivingDunk } from './value-objects/FADrivingDunk';
import { FADrivingLayup } from './value-objects/FADrivingLayup';
import { FAPostControl } from './value-objects/FAPostControl';
import { FAStandingDunk } from './value-objects/FAStandingDunk';
import { FAUpdatedAt } from './value-objects/FAUpdatedAt';
import { FinishingAttributesId } from './value-objects/FinishingAttributesId';

export class FinishingAttributes extends AggregateRoot<IFinishingAttributes> {
  readonly #drivingLayup: FADrivingLayup;

  readonly #drivingDunk: FADrivingDunk;

  readonly #standingDunk: FAStandingDunk;

  readonly #postControl: FAPostControl;

  readonly #playerUserId: PlayerUserId;

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
    this.#playerUserId = new PlayerUserId(playerUserId, 'playerUserId');
  }

  public toPrimitives(): IFinishingAttributes {
    return {
      id: this.id.getValue(),
      drivingLayup: this.#drivingLayup.getValue(),
      drivingDunk: this.#drivingDunk.getValue(),
      standingDunk: this.#standingDunk.getValue(),
      postControl: this.#postControl.getValue(),
      playerUserId: this.#playerUserId.getValue(),
      createdAt: this.createdAt.getValue(),
      updatedAt: this.updatedAt.getValue(),
    };
  }
}

