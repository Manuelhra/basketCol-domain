import { Nullable } from '../../../../shared/domain/Nullable';
import PlayerUserNotFoundError from '../exceptions/PlayerUserNotFoundError';
import PlayerUser from '../PlayerUser';
import { PlayerUserRepository } from '../repository/PlayerUserRepository';
import PlayerUserId from '../value-objects/PlayerUserId';

class PlayerUserValidationService {
  readonly #playerUserRepository: PlayerUserRepository;

  constructor(dependencies: {
    playerUserRepository: PlayerUserRepository;
  }) {
    this.#playerUserRepository = dependencies.playerUserRepository;
  }

  public async ensurePlayerUserExists(playerUserId: PlayerUserId): Promise<void> {
    const playerUserFound: Nullable<PlayerUser> = await this.#playerUserRepository.searchById(playerUserId);

    if (playerUserFound === undefined || playerUserFound === null) {
      throw new PlayerUserNotFoundError(playerUserId);
    }
  }
}

export default PlayerUserValidationService;
