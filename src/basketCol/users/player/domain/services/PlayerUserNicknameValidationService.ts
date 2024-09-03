import { Nullable } from '../../../../shared/domain/Nullable';
import { PlayerUserNicknameAlreadyExistsError } from '../exceptions/PlayerUserNicknameAlreadyExistsError';
import { PlayerUser } from '../PlayerUser';
import { IPlayerUserRepository } from '../repository/IPlayerUserRepository';
import { PlayerUserNickname } from '../value-objects/PlayerUserNickname';

export class PlayerUserNicknameValidationService {
  readonly #playerUserRepository: IPlayerUserRepository;

  constructor(dependencies: {
    playerUserRepository: IPlayerUserRepository;
  }) {
    this.#playerUserRepository = dependencies.playerUserRepository;
  }

  public async ensureNicknameIsUnique(nickname: PlayerUserNickname): Promise<void> {
    const existingPlayer: Nullable<PlayerUser> = await this.#playerUserRepository.searchByNickname(nickname);

    if (existingPlayer !== undefined && existingPlayer !== null) {
      throw new PlayerUserNicknameAlreadyExistsError(nickname);
    }
  }
}
