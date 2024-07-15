import AggregateRoot from '../../../../../shared/domain/AggregateRoot';
import PlayerUserId from '../../../domain/value-objects/PlayerUserId';
import { IReboundingAttributes } from './IReboundingAttributes';
import RACreatedAt from './value-objects/RACreatedAt';
import RADefensiveRebound from './value-objects/RADefensiveRebound';
import RAOffensiveRebound from './value-objects/RAOffensiveRebound';
import RAUpdatedAt from './value-objects/RAUpdatedAt';
import ReboundingAttributesId from './value-objects/ReboundingAttributesId';

class ReboundingAttributes extends AggregateRoot<IReboundingAttributes> {
  readonly #offensiveRebound: RAOffensiveRebound;

  readonly #defensiveRebound: RADefensiveRebound;

  readonly #playerUserId: PlayerUserId;

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
    this.#playerUserId = new PlayerUserId(playerUserId);
  }

  public toPrimitives(): IReboundingAttributes {
    return {
      id: this.id.getValue(),
      offensiveRebound: this.#offensiveRebound.getValue(),
      defensiveRebound: this.#defensiveRebound.getValue(),
      playerUserId: this.#playerUserId.getValue(),
      createdAt: this.createdAt.getValue(),
      updatedAt: this.updatedAt.getValue(),
    };
  }
}
export default ReboundingAttributes;
