import { BusinessDateService } from '../../../../../shared/domain/services/BusinessDateService';
import { IdUniquenessValidatorService } from '../../../../../shared/domain/services/IdUniquenessValidatorService';
import { PlayerUserValidationService } from '../../../domain/services/PlayerUserValidationService';
import { PlayerUserId } from '../../../domain/value-objects/PlayerUserId';
import { DefensiveAttributes } from '../domain/DefensiveAttributes';
import { IDefensiveAttributes } from '../domain/IDefensiveAttributes';
import { DefensiveAttributesRepository } from '../domain/repository/DefensiveAttributesRepository';
import { DACreatedAt } from '../domain/value-objects/DACreatedAt';
import { DAUpdatedAt } from '../domain/value-objects/DAUpdatedAt';
import { DefensiveAttributesId } from '../domain/value-objects/DefensiveAttributesId';
import { DefensiveAttributesCreatorPayload } from './DefensiveAttributesCreatorPayload';

export class DefensiveAttributesCreator {
  readonly #idUniquenessValidatorService: IdUniquenessValidatorService;

  readonly #playerUserValidationService: PlayerUserValidationService;

  readonly #businessDateService: BusinessDateService;

  readonly #defensiveAttributesRepository: DefensiveAttributesRepository;

  constructor(dependencies: {
    idUniquenessValidatorService: IdUniquenessValidatorService;
    playerUserValidationService: PlayerUserValidationService;
    businessDateService: BusinessDateService;
    defensiveAttributesRepository: DefensiveAttributesRepository;
  }) {
    this.#idUniquenessValidatorService = dependencies.idUniquenessValidatorService;
    this.#playerUserValidationService = dependencies.playerUserValidationService;
    this.#businessDateService = dependencies.businessDateService;
    this.#defensiveAttributesRepository = dependencies.defensiveAttributesRepository;
  }

  public async run(payload: DefensiveAttributesCreatorPayload): Promise<void> {
    const {
      id,
      interiorDefense,
      perimeterDefense,
      steal,
      block,
    } = payload;

    const defensiveAttributesId: DefensiveAttributesId = new DefensiveAttributesId(id);
    const playerUserId: PlayerUserId = new PlayerUserId(payload.playerUserId, 'playerUserId');

    await this.#idUniquenessValidatorService.ensureUniqueId<DefensiveAttributesId, IDefensiveAttributes, DefensiveAttributes>(defensiveAttributesId);
    await this.#playerUserValidationService.ensurePlayerUserExists(playerUserId);

    const dACreatedAt: DACreatedAt = this.#businessDateService.getCurrentDate();
    const dAUpdatedAt: DAUpdatedAt = this.#businessDateService.getCurrentDate();

    const defensiveAttributes: DefensiveAttributes = new DefensiveAttributes(
      defensiveAttributesId.getValue(),
      interiorDefense,
      perimeterDefense,
      steal,
      block,
      playerUserId.getValue(),
      dACreatedAt.getValue(),
      dAUpdatedAt.getValue(),
    );

    return this.#defensiveAttributesRepository.save(defensiveAttributes);
  }
}
