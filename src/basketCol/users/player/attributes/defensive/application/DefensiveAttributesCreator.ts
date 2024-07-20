import IdUniquenessValidatorService from '../../../../../shared/domain/services/IdUniquenessValidatorService';
import DefensiveAttributesId from '../domain/value-objects/DefensiveAttributesId';
import { DefensiveAttributesCreatorPayload } from './DefensiveAttributesCreatorPayload';

class DefensiveAttributesCreator {
  readonly #idUniquenessValidatorService: IdUniquenessValidatorService;

  constructor(dependencies: {
    idUniquenessValidatorService: IdUniquenessValidatorService,
  }) {
    this.#idUniquenessValidatorService = dependencies.idUniquenessValidatorService;
  }

  public async run(payload: DefensiveAttributesCreatorPayload): Promise<void> {
    const {
      id,
      interiorDefense,
      perimeterDefense,
      steal,
      block,
      playerUserId,
    } = payload;

    const defensiveAttributesId: DefensiveAttributesId = new DefensiveAttributesId(id);

    await this.#idUniquenessValidatorService.ensureUniqueId(defensiveAttributesId);
  }
}

export default DefensiveAttributesCreator;
