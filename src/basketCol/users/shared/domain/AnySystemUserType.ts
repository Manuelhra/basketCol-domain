import { HostUser } from '../../host/domain/HostUser';
import { LeagueFounderUser } from '../../league-founder/domain/LeagueFounderUser';
import { PlayerUser } from '../../player/domain/PlayerUser';
import { RefereeUser } from '../../referee/domain/RefereeUser';
import { TeamFounderUser } from '../../team-founder/domain/TeamFounderUser';

export type AnySystemUserType = HostUser | PlayerUser | RefereeUser | LeagueFounderUser | TeamFounderUser;
