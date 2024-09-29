import { IAggregateRootPrimitives } from '../../../shared/domain/IAggregateRootPrimitives';

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

export interface IUserPrimitives extends IAggregateRootPrimitives, IUserCredentials, IUserIdentity, IUserAccount {}
