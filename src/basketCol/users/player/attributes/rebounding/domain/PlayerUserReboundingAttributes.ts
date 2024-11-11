import { IPlayerUserReboundingAttributesPrimitives } from './IPlayerUserReboundingAttributesPrimitives';
import { PURACreatedAt } from './value-objects/PURACreatedAt';
import { PURADefensiveRebound } from './value-objects/PURADefensiveRebound';
import { PURAOffensiveRebound } from './value-objects/PURAOffensiveRebound';
import { PURAPlayerUserId } from './value-objects/PURAPlayerUserId';
import { PURAUpdatedAt } from './value-objects/PURAUpdatedAt';
import { PURAId } from './value-objects/PURAId';
import { AttributeCategory } from '../../shared/domain/value-objects/AttributeCategory';

export class PlayerUserReboundingAttributes extends AttributeCategory<IPlayerUserReboundingAttributesPrimitives> {
  readonly #offensiveRebound: PURAOffensiveRebound;

  readonly #defensiveRebound: PURADefensiveRebound;

  readonly #playerUserId: PURAPlayerUserId;

  private constructor(
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
    this.#playerUserId = PURAPlayerUserId.create(playerUserId);
  }

  public override get toPrimitives(): IPlayerUserReboundingAttributesPrimitives {
    return {
      id: this.id.value,
      offensiveRebound: this.#offensiveRebound.value,
      defensiveRebound: this.#defensiveRebound.value,
      playerUserId: this.#playerUserId.value,
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

  public static override fromPrimitives(
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
