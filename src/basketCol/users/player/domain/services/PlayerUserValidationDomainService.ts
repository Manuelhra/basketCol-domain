import { Nullable } from '../../../../shared/domain/Nullable';
import { PlayerUserNicknameAlreadyExistsError } from '../exceptions/PlayerUserNicknameAlreadyExistsError';
import { PlayerUserNotFoundError } from '../exceptions/PlayerUserNotFoundError';
import { PlayerUser } from '../PlayerUser';
import { IPlayerUserRepository } from '../repository/IPlayerUserRepository';
import { PlayerUserId } from '../value-objects/PlayerUserId';
import { PlayerUserNickname } from '../value-objects/PlayerUserNickname';

type Dependencies = {
  readonly playerUserRepository: IPlayerUserRepository;
};

export class PlayerUserValidationDomainService {
  readonly #playerUserRepository: IPlayerUserRepository;

  private constructor(dependencies: Dependencies) {
    this.#playerUserRepository = dependencies.playerUserRepository;
  }

  public static create(dependencies: Dependencies): PlayerUserValidationDomainService {
    return new PlayerUserValidationDomainService(dependencies);
  }

  public async ensurePlayerUserExists(playerUserId: PlayerUserId): Promise<void> {
    const playerUserFound: Nullable<PlayerUser> = await this.#playerUserRepository.findById(playerUserId);

    if (playerUserFound === undefined || playerUserFound === null) {
      throw PlayerUserNotFoundError.create(playerUserId);
    }
  }

  public async ensureNicknameIsUnique(nickname: PlayerUserNickname): Promise<void> {
    const existingPlayer: Nullable<PlayerUser> = await this.#playerUserRepository.findByNickname(nickname);

    if (existingPlayer !== undefined && existingPlayer !== null) {
      throw PlayerUserNicknameAlreadyExistsError.create(nickname);
    }
  }
}
