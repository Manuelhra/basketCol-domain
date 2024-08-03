import { BusinessDateService } from '../../../../../shared/domain/services/BusinessDateService';
import { IdUniquenessValidatorService } from '../../../../../shared/domain/services/IdUniquenessValidatorService';
import { PlayerUserValidationService } from '../../../domain/services/PlayerUserValidationService';
import { DefensiveAttributes } from '../domain/DefensiveAttributes';
import { IDefensiveAttributes } from '../domain/IDefensiveAttributes';
import { DefensiveAttributesRepository } from '../domain/repository/DefensiveAttributesRepository';
import { DACreatedAt } from '../domain/value-objects/DACreatedAt';
import { DAReferencedPlayerUserId } from '../domain/value-objects/DAReferencedPlayerUserId';
import { DAUpdatedAt } from '../domain/value-objects/DAUpdatedAt';
import { DefensiveAttributesId } from '../domain/value-objects/DefensiveAttributesId';
import { CreateDefensiveAttributesDTO } from './dto/CreateDefensiveAttributesDTO';

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

  public async run(payload: CreateDefensiveAttributesDTO): Promise<void> {
    const {
      id,
      interiorDefense,
      perimeterDefense,
      steal,
      block,
      playerUserId,
    } = payload;

    const defensiveAttributesId: DefensiveAttributesId = new DefensiveAttributesId(id);
    const dAPlayerUserId: DAReferencedPlayerUserId = new DAReferencedPlayerUserId(playerUserId);

    await this.#idUniquenessValidatorService.ensureUniqueId<DefensiveAttributesId, IDefensiveAttributes, DefensiveAttributes>(defensiveAttributesId);
    await this.#playerUserValidationService.ensurePlayerUserExists(dAPlayerUserId.value);

    const dACreatedAt: DACreatedAt = this.#businessDateService.getCurrentDate();
    const dAUpdatedAt: DAUpdatedAt = this.#businessDateService.getCurrentDate();

    const defensiveAttributes: DefensiveAttributes = new DefensiveAttributes(
      defensiveAttributesId.value,
      interiorDefense,
      perimeterDefense,
      steal,
      block,
      dAPlayerUserId.playerUserIdAsString,
      dACreatedAt.value,
      dAUpdatedAt.value,
    );

    return this.#defensiveAttributesRepository.save(defensiveAttributes);
  }
}
