import BusinessDateService from '../../../../../shared/domain/services/BusinessDateService';
import IdUniquenessValidatorService from '../../../../../shared/domain/services/IdUniquenessValidatorService';
import PlayerUserValidationService from '../../../domain/services/PlayerUserValidationService';
import PlayerUserId from '../../../domain/value-objects/PlayerUserId';
import FinishingAttributes from '../domain/FinishingAttributes';
import { IFinishingAttributes } from '../domain/IFinishingAttributes';
import { FinishingAttributesRepository } from '../domain/repository/FinishingAttributesRepository';
import FACreatedAt from '../domain/value-objects/FACreatedAt';
import FAUpdatedAt from '../domain/value-objects/FAUpdatedAt';
import FinishingAttributesId from '../domain/value-objects/FinishingAttributesId';
import { FinishingAttributesCreatorPayload } from './FinishingAttributesCreatorPayload';

class FinishingAttributesCreator {
  readonly #idUniquenessValidatorService: IdUniquenessValidatorService;

  readonly #playerUserValidationService: PlayerUserValidationService;

  readonly #businessDateService: BusinessDateService;

  readonly #finishingAttributesRepository: FinishingAttributesRepository;

  constructor(dependencies: {
    idUniquenessValidatorService: IdUniquenessValidatorService;
    playerUserValidationService: PlayerUserValidationService;
    businessDateService: BusinessDateService;
    finishingAttributesRepository: FinishingAttributesRepository;
  }) {
    this.#idUniquenessValidatorService = dependencies.idUniquenessValidatorService;
    this.#playerUserValidationService = dependencies.playerUserValidationService;
    this.#businessDateService = dependencies.businessDateService;
    this.#finishingAttributesRepository = dependencies.finishingAttributesRepository;
  }

  public async run(payload: FinishingAttributesCreatorPayload): Promise<void> {
    const {
      id,
      drivingLayup,
      drivingDunk,
      standingDunk,
      postControl,
    } = payload;

    const finishingAttributesId: FinishingAttributesId = new FinishingAttributesId(id);
    const playerUserId: PlayerUserId = new PlayerUserId(payload.playerUserId, 'playerUserId');

    await this.#idUniquenessValidatorService.ensureUniqueId<FinishingAttributesId, IFinishingAttributes, FinishingAttributes>(finishingAttributesId);
    await this.#playerUserValidationService.ensurePlayerUserExists(playerUserId);

    const createdAt: string = this.#businessDateService.getCurrentDate<FACreatedAt>().getValue();
    const updatedAt: string = this.#businessDateService.getCurrentDate<FAUpdatedAt>().getValue();

    const finishingAttributes: FinishingAttributes = new FinishingAttributes(
      finishingAttributesId.getValue(),
      drivingLayup,
      drivingDunk,
      standingDunk,
      postControl,
      playerUserId.getValue(),
      createdAt,
      updatedAt,
    );

    return this.#finishingAttributesRepository.save(finishingAttributes);
  }
}

export default FinishingAttributesCreator;

// TODO: Validar que los méodos de fechas estén bien tipados
