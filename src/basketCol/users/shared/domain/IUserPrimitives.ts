import { IAggregateRootPrimitives } from '../../../shared/domain/IAggregateRootPrimitives';
import { IImageValueObjectProps } from '../../../shared/domain/value-objects/ImageValueObject';

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

interface IUserMedia {
  profileImage: IImageValueObjectProps;
}

export interface IUserPrimitives extends
  IAggregateRootPrimitives,
  IUserCredentials,
  IUserIdentity,
  IUserMedia,
  IUserAccount {}
