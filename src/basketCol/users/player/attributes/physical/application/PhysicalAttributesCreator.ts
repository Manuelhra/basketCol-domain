import BusinessDateService from '../../../../../shared/domain/services/BusinessDateService';
import IdUniquenessValidatorService from '../../../../../shared/domain/services/IdUniquenessValidatorService';
import PlayerUserValidationService from '../../../domain/services/PlayerUserValidationService';
import PlayerUserId from '../../../domain/value-objects/PlayerUserId';
import { IPhysicalAttributes } from '../domain/IPhysicalAttributes';
import PhysicalAttributes from '../domain/PhysicalAttributes';
import { PhysicalAttributesRepository } from '../domain/repository/PhysicalAttributesRepository';
import PACreatedAt from '../domain/value-objects/PACreatedAt';
import PAUpdatedAt from '../domain/value-objects/PAUpdatedAt';
import PhysicalAttributesId from '../domain/value-objects/PhysicalAttributesId';
import { PhysicalAttributesCreatorPayload } from './PhysicalAttributesCreatorPayload';

class PhysicalAttributesCreator {
  readonly #idUniquenessValidatorService: IdUniquenessValidatorService;

  readonly #playerUserValidationService: PlayerUserValidationService;

  readonly #businessDateService: BusinessDateService;

  readonly #physicalAttributesRepository: PhysicalAttributesRepository;

  constructor(dependencies: {
    idUniquenessValidatorService: IdUniquenessValidatorService;
    playerUserValidationService: PlayerUserValidationService;
    businessDateService: BusinessDateService;
    physicalAttributesRepository: PhysicalAttributesRepository;
  }) {
    this.#idUniquenessValidatorService = dependencies.idUniquenessValidatorService;
    this.#playerUserValidationService = dependencies.playerUserValidationService;
    this.#businessDateService = dependencies.businessDateService;
    this.#physicalAttributesRepository = dependencies.physicalAttributesRepository;
  }

  public async run(payload: PhysicalAttributesCreatorPayload): Promise<void> {
    const {
      id,
      speed,
      acceleration,
      strength,
      vertical,
      stamina,
    } = payload;

    const physicalAttributesId: PhysicalAttributesId = new PhysicalAttributesId(id);
    const playerUserId: PlayerUserId = new PlayerUserId(payload.playerUserId, 'playerUserId');

    await this.#idUniquenessValidatorService.ensureUniqueId<PhysicalAttributesId, IPhysicalAttributes, PhysicalAttributes>(physicalAttributesId);
    await this.#playerUserValidationService.ensurePlayerUserExists(playerUserId);

    const pACreatedAt: PACreatedAt = this.#businessDateService.getCurrentDate<PACreatedAt>();
    const pAUpdatedAt: PAUpdatedAt = this.#businessDateService.getCurrentDate<PAUpdatedAt>();

    const physicalAttributes: PhysicalAttributes = new PhysicalAttributes(
      physicalAttributesId.getValue(),
      speed,
      acceleration,
      strength,
      vertical,
      stamina,
      playerUserId.getValue(),
      pACreatedAt.getValue(),
      pAUpdatedAt.getValue(),
    );

    return this.#physicalAttributesRepository.save(physicalAttributes);
  }
}

export default PhysicalAttributesCreator;
