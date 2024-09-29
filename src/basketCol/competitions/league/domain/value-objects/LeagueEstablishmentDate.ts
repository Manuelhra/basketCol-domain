import { EstablishmentDateValueObject } from '../../../../shared/domain/value-objects/EstablishmentDateValueObject';

export class LeagueEstablishmentDate extends EstablishmentDateValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): LeagueEstablishmentDate {
    return new LeagueEstablishmentDate(value);
  }
}
