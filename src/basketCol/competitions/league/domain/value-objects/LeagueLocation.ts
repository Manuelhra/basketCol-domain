import { ILocationValueObjectProps, LocationValueObject } from '../../../../shared/domain/value-objects/LocationValueObject';

export class LeagueLocation extends LocationValueObject {
  public constructor(props: ILocationValueObjectProps) {
    super(props);
  }

  public static create(props: ILocationValueObjectProps): LeagueLocation {
    return new LeagueLocation(props);
  }
}
