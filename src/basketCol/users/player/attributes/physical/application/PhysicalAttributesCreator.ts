import { BusinessDateService } from '../../../../../shared/domain/services/BusinessDateService';
import { IdUniquenessValidatorService } from '../../../../../shared/domain/services/IdUniquenessValidatorService';
import { PlayerUserValidationService } from '../../../domain/services/PlayerUserValidationService';
import { IPhysicalAttributes } from '../domain/IPhysicalAttributes';
import { PhysicalAttributes } from '../domain/PhysicalAttributes';
import { PhysicalAttributesRepository } from '../domain/repository/PhysicalAttributesRepository';
import { PACreatedAt } from '../domain/value-objects/PACreatedAt';
import { PAReferencedPlayerUserId } from '../domain/value-objects/PAReferencedPlayerUserId';
import { PAUpdatedAt } from '../domain/value-objects/PAUpdatedAt';
import { PhysicalAttributesId } from '../domain/value-objects/PhysicalAttributesId';
import { CreatePhysicalAttributesDTO } from './dto/CreatePhysicalAttributesDTO';

export class PhysicalAttributesCreator {
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

  public async run(payload: CreatePhysicalAttributesDTO): Promise<void> {
    const {
      id,
      speed,
      acceleration,
      strength,
      vertical,
      stamina,
      playerUserId,
    } = payload;

    const physicalAttributesId: PhysicalAttributesId = new PhysicalAttributesId(id);
    const pAPlayerUserId: PAReferencedPlayerUserId = new PAReferencedPlayerUserId(playerUserId);

    await this.#idUniquenessValidatorService.ensureUniqueId<PhysicalAttributesId, IPhysicalAttributes, PhysicalAttributes>(physicalAttributesId);
    await this.#playerUserValidationService.ensurePlayerUserExists(pAPlayerUserId.value);

    const pACreatedAt: PACreatedAt = this.#businessDateService.getCurrentDate();
    const pAUpdatedAt: PAUpdatedAt = this.#businessDateService.getCurrentDate();

    const physicalAttributes: PhysicalAttributes = new PhysicalAttributes(
      physicalAttributesId.value,
      speed,
      acceleration,
      strength,
      vertical,
      stamina,
      pAPlayerUserId.playerUserIdAsString,
      pACreatedAt.value,
      pAUpdatedAt.value,
    );

    return this.#physicalAttributesRepository.save(physicalAttributes);
  }
}
