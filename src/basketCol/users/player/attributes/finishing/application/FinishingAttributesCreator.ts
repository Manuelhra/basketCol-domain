import { BusinessDateService } from '../../../../../shared/domain/services/BusinessDateService';
import { IdUniquenessValidatorService } from '../../../../../shared/domain/services/IdUniquenessValidatorService';
import { PlayerUserValidationService } from '../../../domain/services/PlayerUserValidationService';
import { FinishingAttributes } from '../domain/FinishingAttributes';
import { IFinishingAttributes } from '../domain/IFinishingAttributes';
import { FinishingAttributesRepository } from '../domain/repository/FinishingAttributesRepository';
import { FACreatedAt } from '../domain/value-objects/FACreatedAt';
import { FAReferencedPlayerUserId } from '../domain/value-objects/FAReferencedPlayerUserId';
import { FAUpdatedAt } from '../domain/value-objects/FAUpdatedAt';
import { FinishingAttributesId } from '../domain/value-objects/FinishingAttributesId';
import { CreateFinishingAttributesDTO } from './dto/CreateFinishingAttributesDTO';

export class FinishingAttributesCreator {
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

  public async run(payload: CreateFinishingAttributesDTO): Promise<void> {
    const {
      id,
      drivingLayup,
      drivingDunk,
      standingDunk,
      postControl,
      playerUserId,
    } = payload;

    const finishingAttributesId: FinishingAttributesId = new FinishingAttributesId(id);
    const fAPlayerUserId: FAReferencedPlayerUserId = new FAReferencedPlayerUserId(playerUserId);

    await this.#idUniquenessValidatorService.ensureUniqueId<FinishingAttributesId, IFinishingAttributes, FinishingAttributes>(finishingAttributesId);
    await this.#playerUserValidationService.ensurePlayerUserExists(fAPlayerUserId.value);

    const fACreatedAt: FACreatedAt = this.#businessDateService.getCurrentDate();
    const fAUpdatedAt: FAUpdatedAt = this.#businessDateService.getCurrentDate();

    const finishingAttributes: FinishingAttributes = new FinishingAttributes(
      finishingAttributesId.value,
      drivingLayup,
      drivingDunk,
      standingDunk,
      postControl,
      fAPlayerUserId.playerUserIdAsString,
      fACreatedAt.value,
      fAUpdatedAt.value,
    );

    return this.#finishingAttributesRepository.save(finishingAttributes);
  }
}
