import { Nullable } from '../../../../shared/domain/Nullable';
import { PlayerUserNicknameAlreadyExistsError } from '../exceptions/PlayerUserNicknameAlreadyExistsError';
import { PlayerUser } from '../PlayerUser';
import { IPlayerUserRepository } from '../repository/IPlayerUserRepository';
import { PlayerUserNickname } from '../value-objects/PlayerUserNickname';

type Dependencies = {
  playerUserRepository: IPlayerUserRepository;
};

export class PlayerUserNicknameValidationService {
  readonly #playerUserRepository: IPlayerUserRepository;

  private constructor(dependencies: Dependencies) {
    this.#playerUserRepository = dependencies.playerUserRepository;
  }

  public static create(dependencies: Dependencies): PlayerUserNicknameValidationService {
    return new PlayerUserNicknameValidationService(dependencies);
  }

  public async ensureNicknameIsUnique(nickname: PlayerUserNickname): Promise<void> {
    const existingPlayer: Nullable<PlayerUser> = await this.#playerUserRepository.searchByNickname(nickname);

    if (existingPlayer !== undefined && existingPlayer !== null) {
      throw PlayerUserNicknameAlreadyExistsError.create(nickname);
    }
  }
}
