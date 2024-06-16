import AggregateRoot from '../../shared/domain/AggregateRoot';
import { PlainLeagueData } from './PlainLeagueData';
import LeagueId from './value-objects/LeagueId';

class League extends AggregateRoot {
  constructor(
    id: string,
  ) {
    super(new LeagueId(id));
  }

  public toPrimitives(): PlainLeagueData {
    return {
      id: this.id.getValue(),
    };
  }
}

export default League;
