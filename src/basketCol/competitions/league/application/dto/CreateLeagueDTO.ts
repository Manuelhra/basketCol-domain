interface Item {
  code: string;
  label: string;
}

export interface CreateLeagueDTO {
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
    country: Item;
    department: Item;
    city: Item;
    coords: { lat: number; lng: number; };
  };
  establishmentDate: string;
  leagueFounderUserId: string;
}
