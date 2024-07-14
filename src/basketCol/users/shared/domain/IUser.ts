interface IUserIdentity {
  id: string;
  email: { value: string; verified: boolean; };
  password: string;
  type: string;
  active: boolean;
}

export interface IUser extends IUserIdentity {}
