import { IAggregateRoot } from '../../../shared/domain/IAggregateRoot';

interface IUserIdentity {
  name: { firstName: string; lastName: string; };
  biography: string;
  email: { value: string; verified: boolean; };
  password: string;
  type: string;
  active: boolean;
}

export interface IUser extends IAggregateRoot, IUserIdentity {}
