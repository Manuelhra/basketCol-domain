import { GymIdList } from '../../../../../gym/domain/value-objects/GymIdList';

export class LeagueSeasonGymIdList extends GymIdList {
  public constructor(value: string[]) {
    super(value);
  }
}
