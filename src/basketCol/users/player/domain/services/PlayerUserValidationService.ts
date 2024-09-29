import { Nullable } from '../../../../shared/domain/Nullable';
import { PlayerUserNotFoundError } from '../exceptions/PlayerUserNotFoundError';
import { PlayerUser } from '../PlayerUser';
import { IPlayerUserRepository } from '../repository/IPlayerUserRepository';
import { PlayerUserId } from '../value-objects/PlayerUserId';

type Dependencies = {
  playerUserRepository: IPlayerUserRepository;
};

export class PlayerUserValidationService {
  readonly #playerUserRepository: IPlayerUserRepository;

  private constructor(dependencies: Dependencies) {
    this.#playerUserRepository = dependencies.playerUserRepository;
  }

  public static create(dependencies: Dependencies): PlayerUserValidationService {
    return new PlayerUserValidationService(dependencies);
  }

  public async ensurePlayerUserExists(playerUserId: PlayerUserId): Promise<void> {
    const playerUserFound: Nullable<PlayerUser> = await this.#playerUserRepository.searchById(playerUserId);

    if (playerUserFound === undefined || playerUserFound === null) {
      throw PlayerUserNotFoundError.create(playerUserId);
    }
  }
}
