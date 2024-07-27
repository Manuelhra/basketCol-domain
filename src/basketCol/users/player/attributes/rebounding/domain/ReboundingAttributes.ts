import { AggregateRoot } from '../../../../../shared/domain/AggregateRoot';
import { IReboundingAttributes } from './IReboundingAttributes';
import { RACreatedAt } from './value-objects/RACreatedAt';
import { RADefensiveRebound } from './value-objects/RADefensiveRebound';
import { RAOffensiveRebound } from './value-objects/RAOffensiveRebound';
import { RAReferencedPlayerUserId } from './value-objects/RAReferencedPlayerUserId';
import { RAUpdatedAt } from './value-objects/RAUpdatedAt';
import { ReboundingAttributesId } from './value-objects/ReboundingAttributesId';

export class ReboundingAttributes extends AggregateRoot<IReboundingAttributes> {
  readonly #offensiveRebound: RAOffensiveRebound;

  readonly #defensiveRebound: RADefensiveRebound;

  readonly #playerUserId: RAReferencedPlayerUserId;

  constructor(
    id: string,
    offensiveRebound: number,
    defensiveRebound: number,
    playerUserId: string,
    createdAt: string,
    updatedAt: string,
  ) {
    const reboundingAttributesId: ReboundingAttributesId = new ReboundingAttributesId(id);
    const rACreatedAt: RACreatedAt = new RACreatedAt(createdAt);
    const rAUpdatedAt: RAUpdatedAt = new RAUpdatedAt(updatedAt);

    super(reboundingAttributesId, rACreatedAt, rAUpdatedAt);

    this.#offensiveRebound = new RAOffensiveRebound(offensiveRebound);
    this.#defensiveRebound = new RADefensiveRebound(defensiveRebound);
    this.#playerUserId = new RAReferencedPlayerUserId(playerUserId);
  }

  public toPrimitives(): IReboundingAttributes {
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
