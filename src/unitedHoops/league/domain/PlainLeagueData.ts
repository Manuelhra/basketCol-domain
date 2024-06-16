export interface PlainLeagueData {
  id: string;
  name: {
    short: string;
    official: string;
  };
  description: {
    short: string;
    complete: string;
  };
  rules: string;
  level: string;
  location: {
    country: string;
    department: string;
    city: string;
  };
  creationDate: string;
  isActive: boolean;
}
