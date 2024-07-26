import { CourtIdList } from '../../../../../facilities/court/domain/value-objects/CourtIdList';

export class LeagueSeasonCourtIdList extends CourtIdList {
  public constructor(value: string[]) {
    super(value);
  }
}
