export interface PlainHostUserData {
  id: string;
  email: { value: string; verified: boolean; };
  password: string;
  active: boolean;
}
