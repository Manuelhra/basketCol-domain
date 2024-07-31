import { BusinessDateService } from '../../../../../shared/domain/services/BusinessDateService';
import { IdUniquenessValidatorService } from '../../../../../shared/domain/services/IdUniquenessValidatorService';
import { PlayerUserValidationService } from '../../../domain/services/PlayerUserValidationService';
import { PlayerUserId } from '../../../domain/value-objects/PlayerUserId';
import { IReboundingAttributes } from '../domain/IReboundingAttributes';
import { ReboundingAttributes } from '../domain/ReboundingAttributes';
import { ReboundingAttributesRepository } from '../domain/repository/ReboundingAttributesRepository';
import { RACreatedAt } from '../domain/value-objects/RACreatedAt';
import { RAUpdatedAt } from '../domain/value-objects/RAUpdatedAt';
import { ReboundingAttributesId } from '../domain/value-objects/ReboundingAttributesId';
import { CreateReboundingAttributesDTO } from './dto/CreateReboundingAttributesDTO';

export class ReboundingAttributesCreator {
  readonly #idUniquenessValidatorService: IdUniquenessValidatorService;

  readonly #playerUserValidationService: PlayerUserValidationService;

  readonly #businessDateService: BusinessDateService;

  readonly #reboundingAttributesRepository: ReboundingAttributesRepository;

  constructor(dependencies: {
    idUniquenessValidatorService: IdUniquenessValidatorService;
    playerUserValidationService: PlayerUserValidationService;
    businessDateService: BusinessDateService;
    reboundingAttributesRepository: ReboundingAttributesRepository;
  }) {
    this.#idUniquenessValidatorService = dependencies.idUniquenessValidatorService;
    this.#playerUserValidationService = dependencies.playerUserValidationService;
    this.#businessDateService = dependencies.businessDateService;
    this.#reboundingAttributesRepository = dependencies.reboundingAttributesRepository;
  }

  public async run(payload: CreateReboundingAttributesDTO): Promise<void> {
    const {
      id,
      offensiveRebound,
      defensiveRebound,
    } = payload;

    const reboundingAttributesId: ReboundingAttributesId = new ReboundingAttributesId(id);
    const playerUserId: PlayerUserId = new PlayerUserId(payload.playerUserId, 'playerUserId');

    await this.#idUniquenessValidatorService.ensureUniqueId<ReboundingAttributesId, IReboundingAttributes, ReboundingAttributes>(reboundingAttributesId);
    await this.#playerUserValidationService.ensurePlayerUserExists(playerUserId);

    const rACreatedAt: RACreatedAt = this.#businessDateService.getCurrentDate();
    const rAUpdatedAt: RAUpdatedAt = this.#businessDateService.getCurrentDate();

    const reboundingAttributes: ReboundingAttributes = new ReboundingAttributes(
      reboundingAttributesId.value,
      offensiveRebound,
      defensiveRebound,
      playerUserId.value,
      rACreatedAt.value,
      rAUpdatedAt.value,
    );

    return this.#reboundingAttributesRepository.save(reboundingAttributes);
  }
}
