import { LSGameCreatorPayload } from './LSGameCreatorPayload';

export class LeagueSeasonGameCreator {
  public async run(payload: LSGameCreatorPayload): Promise<void> {
    console.log('Creating league season game...', payload);
  }
}
