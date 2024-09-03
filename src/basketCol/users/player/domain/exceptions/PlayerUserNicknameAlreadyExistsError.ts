import { RootError } from '../../../../shared/domain/exceptions/RootError';
import { PlayerUserNickname } from '../value-objects/PlayerUserNickname';

export class PlayerUserNicknameAlreadyExistsError extends RootError {
  constructor(nickname: PlayerUserNickname) {
    super(`PlayerUser nickname already exists: The nickname '${nickname.value}' is already in use by another player.`);

    this.name = 'PlayerUserNicknameAlreadyExistsError';
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
