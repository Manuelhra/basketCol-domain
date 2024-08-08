import { BusinessDateService } from '../../../../../../shared/domain/services/BusinessDateService';
import { IdUniquenessValidatorService } from '../../../../../../shared/domain/services/IdUniquenessValidatorService';
import { PlayerUserValidationService } from '../../../../domain/services/PlayerUserValidationService';
import { ISkillAttributes } from '../../domain/ISkillAttributes';
import { ISkillAttributesRepository } from '../../domain/repository/ISkillAttributesRepository';
import { SkillAttributes } from '../../domain/SkillAttributes';
import { SACreatedAt } from '../../domain/value-objects/SACreatedAt';
import { SAReferencedPlayerUserId } from '../../domain/value-objects/SAReferencedPlayerUserId';
import { SAUpdatedAt } from '../../domain/value-objects/SAUpdatedAt';
import { SkillAttributesId } from '../../domain/value-objects/SkillAttributesId';
import { CreateSkillAttributesDTO } from '../dto/CreateSkillAttributesDTO';

export class CreateSkillAttributesUseCase {
  readonly #idUniquenessValidatorService: IdUniquenessValidatorService;

  readonly #playerUserValidationService: PlayerUserValidationService;

  readonly #businessDateService: BusinessDateService;

  readonly #skillAttributesRepository: ISkillAttributesRepository;

  constructor(dependencies: {
    idUniquenessValidatorService: IdUniquenessValidatorService;
    playerUserValidationService: PlayerUserValidationService;
    businessDateService: BusinessDateService;
    skillAttributesRepository: ISkillAttributesRepository;
  }) {
    this.#idUniquenessValidatorService = dependencies.idUniquenessValidatorService;
    this.#playerUserValidationService = dependencies.playerUserValidationService;
    this.#businessDateService = dependencies.businessDateService;
    this.#skillAttributesRepository = dependencies.skillAttributesRepository;
  }

  public async run(payload: CreateSkillAttributesDTO): Promise<void> {
    const {
      id,
      passAccuracy,
      ballHandle,
      speedWithBall,
      playerUserId,
    } = payload;

    const skillAttributesId: SkillAttributesId = new SkillAttributesId(id);
    const sAPlayerUserId: SAReferencedPlayerUserId = new SAReferencedPlayerUserId(playerUserId);

    await this.#idUniquenessValidatorService.ensureUniqueId<SkillAttributesId, ISkillAttributes, SkillAttributes>(skillAttributesId);
    await this.#playerUserValidationService.ensurePlayerUserExists(sAPlayerUserId.value);

    const sACreatedAt: SACreatedAt = this.#businessDateService.getCurrentDate();
    const sAUpdatedAt: SAUpdatedAt = this.#businessDateService.getCurrentDate();

    const skillAttributes: SkillAttributes = new SkillAttributes(
      skillAttributesId.value,
      passAccuracy,
      ballHandle,
      speedWithBall,
      sAPlayerUserId.playerUserIdAsString,
      sACreatedAt.value,
      sAUpdatedAt.value,
    );

    return this.#skillAttributesRepository.save(skillAttributes);
  }
}
