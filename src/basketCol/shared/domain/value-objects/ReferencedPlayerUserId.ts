import { PlayerUserId } from '../../../users/player/domain/value-objects/PlayerUserId';
import { InvalidPlayerUserIdInstanceError } from '../exceptions/InvalidPlayerUserIdInstanceError';
import { ValueObject } from './ValueObject';

export abstract class ReferencedPlayerUserId extends ValueObject<PlayerUserId> {
  protected constructor(value: string, propertyName: string = 'playerUserId') {
    const playerUserId: PlayerUserId = new PlayerUserId(value, 'playerUserId');

    super(playerUserId, propertyName, 'string');

    this.ensureIsPlayerUserId(playerUserId);
  }

  public get playerUserIdAsString(): string {
    return this.value.value;
  }

  private ensureIsPlayerUserId(value: PlayerUserId): void {
    if (!(value instanceof PlayerUserId)) {
      throw new InvalidPlayerUserIdInstanceError();
    }
  }
}

// TODO: Crear los value objecst abstractos para todos los campos relacionados, cambiar los que ya se usaron y heredarlos de esta carpeta general
