import { BusinessDateService } from '../../../../../../shared/domain/services/BusinessDateService';
import { IdUniquenessValidatorService } from '../../../../../../shared/domain/services/IdUniquenessValidatorService';
import { PlayerUserValidationService } from '../../../../domain/services/PlayerUserValidationService';
import { IShootingAttributes } from '../../domain/IShootingAttributes';
import { IShootingAttributesRepository } from '../../domain/repository/IShootingAttributesRepository';
import { ShootingAttributes } from '../../domain/ShootingAttributes';
import { SACreatedAt } from '../../domain/value-objects/SACreatedAt';
import { SAReferencedPlayerUserId } from '../../domain/value-objects/SAReferencedPlayerUserId';
import { SAUpdatedAt } from '../../domain/value-objects/SAUpdatedAt';
import { ShootingAttributesId } from '../../domain/value-objects/ShootingAttributesId';
import { CreateShootingAttributesDTO } from '../dto/CreateShootingAttributesDTO';

export class CreateShootingAttributesUseCase {
  readonly #idUniquenessValidatorService: IdUniquenessValidatorService;

  readonly #playerUserValidationService: PlayerUserValidationService;

  readonly #businessDateService: BusinessDateService;

  readonly #shootingAttributesRepository: IShootingAttributesRepository;

  constructor(dependencies: {
    idUniquenessValidatorService: IdUniquenessValidatorService;
    playerUserValidationService: PlayerUserValidationService;
    businessDateService: BusinessDateService;
    shootingAttributesRepository: IShootingAttributesRepository;
  }) {
    this.#idUniquenessValidatorService = dependencies.idUniquenessValidatorService;
    this.#playerUserValidationService = dependencies.playerUserValidationService;
    this.#businessDateService = dependencies.businessDateService;
    this.#shootingAttributesRepository = dependencies.shootingAttributesRepository;
  }

  public async run(payload: CreateShootingAttributesDTO): Promise<void> {
    const {
      id,
      closeShot,
      midRangeShot,
      threePointShot,
      freeThrow,
      playerUserId,
    } = payload;

    const shootingAttributesId: ShootingAttributesId = new ShootingAttributesId(id);
    const sAPlayerUserId: SAReferencedPlayerUserId = new SAReferencedPlayerUserId(playerUserId);

    await this.#idUniquenessValidatorService.ensureUniqueId<ShootingAttributesId, IShootingAttributes, ShootingAttributes>(shootingAttributesId);
    await this.#playerUserValidationService.ensurePlayerUserExists(sAPlayerUserId.value);

    const sACreatedAt: SACreatedAt = this.#businessDateService.getCurrentDate();
    const sAUpdatedAt: SAUpdatedAt = this.#businessDateService.getCurrentDate();

    const shootingAttributes: ShootingAttributes = new ShootingAttributes(
      shootingAttributesId.value,
      closeShot,
      midRangeShot,
      threePointShot,
      freeThrow,
      sAPlayerUserId.playerUserIdAsString,
      sACreatedAt.value,
      sAUpdatedAt.value,
    );

    return this.#shootingAttributesRepository.save(shootingAttributes);
  }
}
