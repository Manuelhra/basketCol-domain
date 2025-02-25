import { AggregateRoot } from '../../shared/domain/AggregateRoot';
import { IPasswordResetTokenPrimitives } from './IPasswordResetTokenPrimitives';
import { PasswordResetTokenCode } from './value-objects/PasswordResetTokenCode';
import { PasswordResetTokenCreatedAt } from './value-objects/PasswordResetTokenCreatedAt';
import { PasswordResetTokenExpiresAtDate } from './value-objects/PasswordResetTokenExpiresAtDate';
import { PasswordResetTokenExpiresAtTime } from './value-objects/PasswordResetTokenExpiresAtTime';
import { PasswordResetTokenId } from './value-objects/PasswordResetTokenId';
import { PasswordResetTokenIsUsed } from './value-objects/PasswordResetTokenIsUsed';
import { PasswordResetTokenUpdatedAt } from './value-objects/PasswordResetTokenUpdatedAt';
import { PasswordResetTokenUserId } from './value-objects/PasswordResetTokenUserId';
import { PasswordResetTokenUserType } from './value-objects/PasswordResetTokenUserType';

export class PasswordResetToken extends AggregateRoot<IPasswordResetTokenPrimitives> {
  readonly #userId: PasswordResetTokenUserId;

  readonly #userType: PasswordResetTokenUserType;

  readonly #code: PasswordResetTokenCode;

  readonly #expiresAtDate: PasswordResetTokenExpiresAtDate;

  readonly #expiresAtTime: PasswordResetTokenExpiresAtTime;

  readonly #isUsed: PasswordResetTokenIsUsed;

  private constructor(
    id: string,
    userId: string,
    userType: string,
    code: string,
    expiresAtDate: string,
    expiresAtTime: string,
    isUsed: boolean,
    createdAt: string,
    updatedAt: string,
  ) {
    super(
      PasswordResetTokenId.create(id),
      PasswordResetTokenCreatedAt.create(createdAt),
      PasswordResetTokenUpdatedAt.create(updatedAt),
    );

    this.#userId = PasswordResetTokenUserId.create(userId);
    this.#userType = PasswordResetTokenUserType.create(userType);
    this.#code = PasswordResetTokenCode.create(code);
    this.#expiresAtDate = PasswordResetTokenExpiresAtDate.create(expiresAtDate);
    this.#expiresAtTime = PasswordResetTokenExpiresAtTime.create(expiresAtTime);
    this.#isUsed = PasswordResetTokenIsUsed.create(isUsed);
  }

  public override get toPrimitives(): IPasswordResetTokenPrimitives {
    return {
      id: this.id.value,
      userId: this.#userId.value,
      userType: this.#userType.value,
      code: this.#code.value,
      expiresAtDate: this.#expiresAtDate.value,
      expiresAtTime: this.#expiresAtTime.value,
      isUsed: this.#isUsed.value,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }

  public static override create(
    id: string,
    userId: string,
    userType: string,
    code: string,
    expiresAtDate: string,
    expiresAtTime: string,
    isUsed: boolean,
    createdAt: string,
    updatedAt: string,
  ): PasswordResetToken {
    return new PasswordResetToken(
      id,
      userId,
      userType,
      code,
      expiresAtDate,
      expiresAtTime,
      isUsed,
      createdAt,
      updatedAt,
    );
  }

  public static override fromPrimitives(
    id: string,
    userId: string,
    userType: string,
    code: string,
    expiresAtDate: string,
    expiresAtTime: string,
    isUsed: boolean,
    createdAt: string,
    updatedAt: string,
  ): PasswordResetToken {
    return new PasswordResetToken(
      id,
      userId,
      userType,
      code,
      expiresAtDate,
      expiresAtTime,
      isUsed,
      createdAt,
      updatedAt,
    );
  }
}
