import { AggregateRoot } from '../../../../../shared/domain/AggregateRoot';
import { IPlayerUserReboundingAttributes } from './IPlayerUserReboundingAttributes';
import { PURACreatedAt } from './value-objects/PURACreatedAt';
import { PURADefensiveRebound } from './value-objects/PURADefensiveRebound';
import { PURAOffensiveRebound } from './value-objects/PURAOffensiveRebound';
import { PURAReferencedPlayerUserId } from './value-objects/PURAReferencedPlayerUserId';
import { PURAUpdatedAt } from './value-objects/PURAUpdatedAt';
import { PURAId } from './value-objects/PURAId';

export class PlayerUserReboundingAttributes extends AggregateRoot<IPlayerUserReboundingAttributes> {
  readonly #offensiveRebound: PURAOffensiveRebound;

  readonly #defensiveRebound: PURADefensiveRebound;

  readonly #playerUserId: PURAReferencedPlayerUserId;

  constructor(
    id: string,
    offensiveRebound: number,
    defensiveRebound: number,
    playerUserId: string,
    createdAt: string,
    updatedAt: string,
  ) {
    const pURAId: PURAId = new PURAId(id);
    const pURACreatedAt: PURACreatedAt = new PURACreatedAt(createdAt);
    const pURAUpdatedAt: PURAUpdatedAt = new PURAUpdatedAt(updatedAt);

    super(pURAId, pURACreatedAt, pURAUpdatedAt);

    this.#offensiveRebound = new PURAOffensiveRebound(offensiveRebound);
    this.#defensiveRebound = new PURADefensiveRebound(defensiveRebound);
    this.#playerUserId = new PURAReferencedPlayerUserId(playerUserId);
  }

  public toPrimitives(): IPlayerUserReboundingAttributes {
    return {
      id: this.id.value,
      offensiveRebound: this.#offensiveRebound.value,
      defensiveRebound: this.#defensiveRebound.value,
      playerUserId: this.#playerUserId.playerUserIdAsString,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }
}
