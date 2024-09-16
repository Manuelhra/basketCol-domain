import { IAggregateRoot } from '../../../shared/domain/IAggregateRoot';

interface IUserCredentials {
  email: { value: string; verified: boolean; };
  password: string;
}

interface IUserAccount {
  accountStatus: string;
  subscriptionType: string;
}

interface IUserIdentity {
  name: { firstName: string; lastName: string; };
  biography: string;
  type: string;
  accountStatus: string;
  subscriptionType: string;
}

export interface IUser extends IAggregateRoot, IUserCredentials, IUserIdentity, IUserAccount {}
