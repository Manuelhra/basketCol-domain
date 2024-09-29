import { AggregateRoot } from '../../../../../shared/domain/AggregateRoot';
import { IPlayerUserReboundingAttributesPrimitives } from './IPlayerUserReboundingAttributesPrimitives';
import { PURACreatedAt } from './value-objects/PURACreatedAt';
import { PURADefensiveRebound } from './value-objects/PURADefensiveRebound';
import { PURAOffensiveRebound } from './value-objects/PURAOffensiveRebound';
import { PURAReferencedPlayerUserId } from './value-objects/PURAReferencedPlayerUserId';
import { PURAUpdatedAt } from './value-objects/PURAUpdatedAt';
import { PURAId } from './value-objects/PURAId';

export class PlayerUserReboundingAttributes extends AggregateRoot<IPlayerUserReboundingAttributesPrimitives> {
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
    const pURAId: PURAId = PURAId.create(id);
    const pURACreatedAt: PURACreatedAt = PURACreatedAt.create(createdAt);
    const pURAUpdatedAt: PURAUpdatedAt = PURAUpdatedAt.create(updatedAt);

    super(pURAId, pURACreatedAt, pURAUpdatedAt);

    this.#offensiveRebound = PURAOffensiveRebound.create(offensiveRebound);
    this.#defensiveRebound = PURADefensiveRebound.create(defensiveRebound);
    this.#playerUserId = PURAReferencedPlayerUserId.create(playerUserId);
  }

  public override toPrimitives(): IPlayerUserReboundingAttributesPrimitives {
    return {
      id: this.id.value,
      offensiveRebound: this.#offensiveRebound.value,
      defensiveRebound: this.#defensiveRebound.value,
      playerUserId: this.#playerUserId.playerUserIdAsString,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }

  public static override create(
    id: string,
    offensiveRebound: number,
    defensiveRebound: number,
    playerUserId: string,
    createdAt: string,
    updatedAt: string,
  ): PlayerUserReboundingAttributes {
    return new PlayerUserReboundingAttributes(
      id,
      offensiveRebound,
      defensiveRebound,
      playerUserId,
      createdAt,
      updatedAt,
    );
  }
}
