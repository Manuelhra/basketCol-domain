export interface RefereeUserCreatorPayload {
  id: string;
  name: { firstName: string; lastName: string; };
  biography: string;
  email: { value: string; };
  password: string;
}
