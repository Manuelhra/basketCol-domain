import { BusinessDateService } from '../../../../../shared/domain/services/BusinessDateService';
import { IdUniquenessValidatorService } from '../../../../../shared/domain/services/IdUniquenessValidatorService';
import { PlayerUserValidationService } from '../../../domain/services/PlayerUserValidationService';
import { PlayerUserId } from '../../../domain/value-objects/PlayerUserId';
import { ISkillAttributes } from '../domain/ISkillAttributes';
import { SkillAttributesRepository } from '../domain/repository/SkillAttributesRepository';
import { SkillAttributes } from '../domain/SkillAttributes';
import { SACreatedAt } from '../domain/value-objects/SACreatedAt';
import { SAUpdatedAt } from '../domain/value-objects/SAUpdatedAt';
import { SkillAttributesId } from '../domain/value-objects/SkillAttributesId';
import { SkillAttributesCreatorPayload } from './SkillAttributesCreatorPayload';

export class SkillAttributesCreator {
  readonly #idUniquenessValidatorService: IdUniquenessValidatorService;

  readonly #playerUserValidationService: PlayerUserValidationService;

  readonly #businessDateService: BusinessDateService;

  readonly #skillAttributesRepository: SkillAttributesRepository;

  constructor(dependencies: {
    idUniquenessValidatorService: IdUniquenessValidatorService;
    playerUserValidationService: PlayerUserValidationService;
    businessDateService: BusinessDateService;
    skillAttributesRepository: SkillAttributesRepository;
  }) {
    this.#idUniquenessValidatorService = dependencies.idUniquenessValidatorService;
    this.#playerUserValidationService = dependencies.playerUserValidationService;
    this.#businessDateService = dependencies.businessDateService;
    this.#skillAttributesRepository = dependencies.skillAttributesRepository;
  }

  public async run(payload: SkillAttributesCreatorPayload): Promise<void> {
    const {
      id,
      passAccuracy,
      ballHandle,
      speedWithBall,
    } = payload;

    const skillAttributesId: SkillAttributesId = new SkillAttributesId(id);
    const playerUserId: PlayerUserId = new PlayerUserId(payload.playerUserId, 'playerUserId');

    await this.#idUniquenessValidatorService.ensureUniqueId<SkillAttributesId, ISkillAttributes, SkillAttributes>(skillAttributesId);
    await this.#playerUserValidationService.ensurePlayerUserExists(playerUserId);

    const sACreatedAt: SACreatedAt = this.#businessDateService.getCurrentDate<SACreatedAt>();
    const sAUpdatedAt: SAUpdatedAt = this.#businessDateService.getCurrentDate<SAUpdatedAt>();

    const skillAttributes: SkillAttributes = new SkillAttributes(
      skillAttributesId.getValue(),
      passAccuracy,
      ballHandle,
      speedWithBall,
      playerUserId.getValue(),
      sACreatedAt.getValue(),
      sAUpdatedAt.getValue(),
    );

    return this.#skillAttributesRepository.save(skillAttributes);
  }
}
