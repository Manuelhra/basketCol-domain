import { IAggregateRootPrimitives } from '../../shared/domain/IAggregateRootPrimitives';

export interface IPasswordResetTokenPrimitives extends IAggregateRootPrimitives {
  userId: string;
  userType: string;
  code: string;
  expiresAtDate: string;
  expiresAtTime: string;
  isUsed: boolean;
}
