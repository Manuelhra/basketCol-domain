export interface IHostUser {
  id: string;
  email: { value: string; verified: boolean; };
  password: string;
  type: string;
  active: boolean;
}
