import { IAggregateRoot } from '../../../shared/domain/IAggregateRoot';

interface IUserCredentials {
  email: { value: string; verified: boolean; };
  password: string;
}

interface IUserIdentity {
  name: { firstName: string; lastName: string; };
  biography: string;
  type: string;
  active: boolean;
}

export interface IUser extends IAggregateRoot, IUserCredentials, IUserIdentity {}
