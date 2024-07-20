import BusinessDateService from '../../../../../shared/domain/services/BusinessDateService';
import IdUniquenessValidatorService from '../../../../../shared/domain/services/IdUniquenessValidatorService';
import PlayerUserValidationService from '../../../domain/services/PlayerUserValidationService';
import PlayerUserId from '../../../domain/value-objects/PlayerUserId';
import { IShootingAttributes } from '../domain/IShootingAttributes';
import { ShootingAttributesRepository } from '../domain/repository/ShootingAttributesRepository';
import ShootingAttributes from '../domain/ShootingAttributes';
import SACreatedAt from '../domain/value-objects/SACreatedAt';
import SAUpdatedAt from '../domain/value-objects/SAUpdatedAt';
import ShootingAttributesId from '../domain/value-objects/ShootingAttributesId';
import { ShootingAttributesCreatorPayload } from './ShootingAttributesCreatorPayload';

class ShootingAttributesCreator {
  readonly #idUniquenessValidatorService: IdUniquenessValidatorService;

  readonly #playerUserValidationService: PlayerUserValidationService;

  readonly #businessDateService: BusinessDateService;

  readonly #shootingAttributesRepository: ShootingAttributesRepository;

  constructor(dependencies: {
    idUniquenessValidatorService: IdUniquenessValidatorService;
    playerUserValidationService: PlayerUserValidationService;
    businessDateService: BusinessDateService;
    shootingAttributesRepository: ShootingAttributesRepository;
  }) {
    this.#idUniquenessValidatorService = dependencies.idUniquenessValidatorService;
    this.#playerUserValidationService = dependencies.playerUserValidationService;
    this.#businessDateService = dependencies.businessDateService;
    this.#shootingAttributesRepository = dependencies.shootingAttributesRepository;
  }

  public async run(payload: ShootingAttributesCreatorPayload): Promise<void> {
    const {
      id,
      closeShot,
      midRangeShot,
      threePointShot,
      freeThrow,
    } = payload;

    const shootingAttributesId: ShootingAttributesId = new ShootingAttributesId(id);
    const playerUserId: PlayerUserId = new PlayerUserId(payload.playerUserId, 'playerUserId');

    await this.#idUniquenessValidatorService.ensureUniqueId<ShootingAttributesId, IShootingAttributes, ShootingAttributes>(shootingAttributesId);
    await this.#playerUserValidationService.ensurePlayerUserExists(playerUserId);

    const sACreatedAt: SACreatedAt = this.#businessDateService.getCurrentDate<SACreatedAt>();
    const sAUpdatedAt: SAUpdatedAt = this.#businessDateService.getCurrentDate<SAUpdatedAt>();

    const shootingAttributes: ShootingAttributes = new ShootingAttributes(
      shootingAttributesId.getValue(),
      closeShot,
      midRangeShot,
      threePointShot,
      freeThrow,
      playerUserId.getValue(),
      sACreatedAt.getValue(),
      sAUpdatedAt.getValue(),
    );

    return this.#shootingAttributesRepository.save(shootingAttributes);
  }
}

export default ShootingAttributesCreator;
