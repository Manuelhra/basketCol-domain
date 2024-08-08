import { Nullable } from '../../../../shared/domain/Nullable';
import { PlayerUserNotFoundError } from '../exceptions/PlayerUserNotFoundError';
import { PlayerUser } from '../PlayerUser';
import { IPlayerUserRepository } from '../repository/IPlayerUserRepository';
import { PlayerUserId } from '../value-objects/PlayerUserId';

export class PlayerUserValidationService {
  readonly #playerUserRepository: IPlayerUserRepository;

  constructor(dependencies: {
    playerUserRepository: IPlayerUserRepository;
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
