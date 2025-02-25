import { Nullable } from '../../../shared/domain/Nullable';
import { PasswordResetToken } from '../PasswordResetToken';
import { PasswordResetTokenCode } from '../value-objects/PasswordResetTokenCode';
import { PasswordResetTokenId } from '../value-objects/PasswordResetTokenId';
import { PasswordResetTokenUserId } from '../value-objects/PasswordResetTokenUserId';

export interface IPasswordResetTokenRepository {
  save(passwordResetToken: PasswordResetToken): Promise<void>;
  findById(passwordResetTokenId: PasswordResetTokenId): Promise<Nullable<PasswordResetToken>>;
  findByCode(passwordResetTokenCode: PasswordResetTokenCode): Promise<Nullable<PasswordResetToken>>;
  findByCodeAndUserId(passwordResetTokenCode: PasswordResetTokenCode, passwordResetTokenUserId: PasswordResetTokenUserId): Promise<Nullable<PasswordResetToken>>;
}
